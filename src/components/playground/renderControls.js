import React, { cloneElement, isValidElement } from 'react';
import createFragment from 'react-addons-create-fragment';
import { mapValues, get, set } from 'lodash';

/*
 * Returns a ReactFragment containing all rendered controls.
 */
const renderControls = (properties, componentProperties, setComponentProperties, keyPath = []) => {
  const updatePropertyValues = (path, value) => {
    const values = set(componentProperties, path.join('.'), value);
    setComponentProperties(values);
  };

  const controls = mapValues(properties, (ElementOrObject, key) => {
    const newKeyPath = keyPath.slice();
    newKeyPath.push(key);

    // render control with props
    if (isValidElement(ElementOrObject)) {
      const props = {
        label: key,
        value: get(componentProperties, newKeyPath.join('.')),
        onUpdate: ({ value }) => updatePropertyValues(newKeyPath, value),
      };
      return cloneElement(ElementOrObject, props);
    }

    // render nested object
    return (
      <div>
        <div style={{ height: 30 }}>{key}: {'{'}</div>
          <div style={{ paddingLeft: 10 }}>
            {renderControls(ElementOrObject, componentProperties, setComponentProperties, newKeyPath)}
          </div>
        <div>{'}'}</div>
      </div>
    );
  });
  return createFragment(controls);
};

export default renderControls;
