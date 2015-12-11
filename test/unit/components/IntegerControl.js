/* eslint no-unused-expressions: 0 */

import {expect} from 'chai';
import IntegerControl from '../../../src/components/IntegerControl';
import {shallow} from 'enzyme';
import React from 'react';
import {stub} from 'sinon';

describe('IntegerControl', () => {
  it('should render the label', () => {
    const result = shallow(<IntegerControl label="Age" />);
    expect(result.contains('Age')).to.be.true;
  });

  describe('randomValue', () => {
    beforeEach(() => {
      stub(Math, 'random').returns(0.6);
    });

    afterEach(() => {
      Math.random.restore();
    });

    it('should return an integer', () => {
      expect(IntegerControl.randomValue({})).to.be.a('number');
    });
  });
});
