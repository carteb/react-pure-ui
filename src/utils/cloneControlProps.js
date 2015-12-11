import { cloneElement } from 'react';
import { fromJS } from 'immutable';
import { isElement } from 'react-addons-test-utils';

const cloneControlProperties = (controlProps, newProps) => {
  const newControls = fromJS(controlProps).map((immutableObject, key) => {
    const ElementOrObject = immutableObject.toJS();
    if (isElement(ElementOrObject)) {
      return cloneElement(ElementOrObject, newProps[key]);
    }

    return cloneControlProperties(ElementOrObject, newProps[key]);
  });
  return newControls.toJS();
};

export default cloneControlProperties;
