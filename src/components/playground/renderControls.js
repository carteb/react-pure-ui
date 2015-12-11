import React, { cloneElement } from 'react';
import { fromJS } from 'immutable';
import { isElement } from 'react-addons-test-utils';
import createFragment from 'react-addons-create-fragment';

/*
 * Returns a ReactFragment containing all rendered controls.
 */
const renderControls = (properties, componentProperties, setComponentProperties, keyPath = fromJS([])) => {
  const updatePropertyValues = (path, value) => {
    const values = componentProperties.setIn(path.toJS(), value);
    setComponentProperties(values.toJS());
  };

  const controls = properties.map((immutableObject, key) => {
    const newKeyPath = keyPath.push(key);
    const ElementOrObject = immutableObject.toJS();

    // render control with props
    if (isElement(ElementOrObject)) {
      const props = {
        label: key,
        value: componentProperties.getIn(newKeyPath),
        onUpdate: ({ value }) => updatePropertyValues(newKeyPath, value),
      };
      return cloneElement(ElementOrObject, props);
    }

    // render nested object
    return (
      <div>
        <div style={{ height: 30 }}>{key}: {'{'}</div>
          <div style={{ paddingLeft: 10 }}>
            {renderControls(immutableObject, componentProperties, setComponentProperties, newKeyPath)}
          </div>
        <div>{'}'}</div>
      </div>
    );
  });
  return createFragment(controls.toJS());
};

export default renderControls;
