/* eslint no-unused-expressions: 0 */

import React from 'react';
import { expect } from 'chai';
import { fromJS } from 'immutable';
import { describeWithDOM, mount, shallow } from 'enzyme';
import { spy } from 'sinon';
import TestControl from '../../../TestControl';
import renderControls from '../../../../src/components/playground/renderControls';

describe('renderControls', () => {
  it('should render a control', () => {
    const properties = {
      age: <TestControl />,
    };

    const result = renderControls(fromJS(properties), fromJS({ age: 22 }));
    const controls = shallow(result[0]);
    expect(controls.html()).to.equal(`<div>Test control:<input type="text" value="22"/></div>`);
  });

  it('should render nested controls', () => {
    const properties = {
      foo: {
        bar: <TestControl />,
      },
    };

    const result = renderControls(fromJS(properties), fromJS({ foo: { bar: 22 } }));
    const controls = shallow(result[0]);
    expect(controls.html()).to.contain(`<div>Test control:<input type="text" value="22"/>`);
  });

  it('should call setComponentProperties on control input changes', () => {
    const properties = {
      age: <TestControl />,
    };

    const callback = spy();
    const result = renderControls(fromJS(properties), fromJS({ age: 22 }), callback);
    const controls = shallow(result[0]);
    controls.find('input').simulate('change', { target: { value: 32 } });
    expect(callback).to.have.been.calledOnce;
    expect(callback).to.have.been.calledWith({ age: 32 });
  });

  describeWithDOM('nested control', () => {
    it('should call setComponentProperties on input changes', () => {
      const properties = {
        foo: {
          bar: <TestControl />,
        },
      };

      const callback = spy();
      const result = renderControls(fromJS(properties), fromJS({ foo: { bar: 22 } }), callback);
      const controls = mount(result[0]);
      controls.find('input').simulate('change', { target: { value: 32 } });
      expect(callback).to.have.been.calledOnce;
      expect(callback).to.have.been.calledWith({ foo: { bar: 32 } });
    });
  });
});
