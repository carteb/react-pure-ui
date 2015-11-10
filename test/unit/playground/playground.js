/* eslint no-unused-expressions: 0 */

import {expect} from 'chai';
import {shallow} from 'reagent';
import React from 'react';
import {stub} from 'sinon';
import TestControl from '../../TestControl';
import playground from '../../../src/components/playground';

describe('playground', () => {
  let component;

  beforeEach(() => {
    component = ({age}) => <p>{age}</p>;
  });

  it('should render the title', () => {
    const Playground = playground(component, {});
    const result = shallow(<Playground />);
    expect(result.contains('Playground')).to.be.true;
  });

  it('should render custom title', () => {
    const Playground = playground(component, {}, 'Test');
    const result = shallow(<Playground />);
    expect(result.contains('Test')).to.be.true;
  });

  describe('with TestControl', () => {
    beforeEach(() => {
      stub(TestControl, 'randomValue').returns(88);
    });

    it('should render the control & pass the initial random value down to the component', () => {
      const properties = {
        age: <TestControl />,
      };
      const Playground = playground(component, properties);
      const result = shallow(<Playground />).html();
      expect(result).to.contain(`<input type="text" value="88"/>`);
      expect(result).to.contain(`<p>88</p>`);
    });
  });
});
