import { cloneElement, isValidElement } from 'react';
import { fromJS } from 'immutable';

const cloneControlProperties = (controlProps, newProps) => {
  const newControls = fromJS(controlProps).map((immutableObject, key) => {
    const ElementOrObject = immutableObject.toJS();
    if (isValidElement(ElementOrObject)) {
      return cloneElement(ElementOrObject, newProps[key]);
    }

    return cloneControlProperties(ElementOrObject, newProps[key]);
  });
  return newControls.toJS();
};

export default cloneControlProperties;
