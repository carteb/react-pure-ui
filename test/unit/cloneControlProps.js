import React from 'react';
import {expect} from 'chai';
import TestControl from '../TestControl';
import cloneControlProps from '../../src/utils/cloneControlProps';

describe('cloneControlProps', () => {
  it('should clone control properties and overwrite based on the new properties', () => {
    const properties = {
      age: <TestControl />,
      size: <TestControl />,
      weight: <TestControl value={42} />,
    };
    const newProps = {
      weight: {value: 103},
      age: {value: 22},
    };

    const result = cloneControlProps(properties, newProps);
    expect(result.age.props).to.eqls({value: 22});
    expect(result.size.props).to.eqls({});
    expect(result.weight.props).to.eqls({value: 103});
  });

  it('should clone nexted control properties', () => {
    const properties = {
      attributes: {
        age: <TestControl />,
        size: <TestControl />,
        weight: <TestControl value={42} />,
      },
    };
    const newProps = {
      attributes: {
        weight: {value: 103},
        age: {value: 22},
      },
    };

    const result = cloneControlProps(properties, newProps);
    expect(result.attributes.age.props).to.eqls({value: 22});
    expect(result.attributes.size.props).to.eqls({});
    expect(result.attributes.weight.props).to.eqls({value: 103});
  });
});
