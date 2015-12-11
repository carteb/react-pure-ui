/* eslint no-unused-expressions: 0 */

import { expect } from 'chai';
import BooleanControl from '../../../src/components/BooleanControl';
import { shallow } from 'enzyme';
import { stub } from 'sinon';
import React from 'react';

describe('BooleanControl', () => {
  it('should render the label', () => {
    const result = shallow(<BooleanControl label="Age" />);
    expect(result.contains('Age')).to.be.true;
  });

  describe('randomValue', () => {
    beforeEach(() => {
      stub(Math, 'random').returns(0.5);
    });

    afterEach(() => {
      Math.random.restore();
    });

    it('should return a boolean', () => {
      expect(BooleanControl.randomValue({})).to.be.a('boolean');
    });
  });
});
