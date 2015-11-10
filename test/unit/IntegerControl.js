/* eslint no-unused-expressions: 0 */

import {expect} from 'chai';
import IntegerControl from '../../src/components/IntegerControl';
import {shallow} from 'reagent';
import React from 'react';

describe('IntegerControl', () => {
  it('should render the label', () => {
    const result = shallow(<IntegerControl label="Age" />);
    expect(result.contains('Age')).to.be.true;
  });

  describe('randomValue', () => {
    it('should return an integer', () => {
      expect(IntegerControl.randomValue({})).to.be.a('number');
    });
  });
});
