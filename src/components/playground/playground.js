import React from 'react';
import { withState } from 'recompose';
import { fromJS } from 'immutable';
import randomValues from './randomValues';
import renderControls from './renderControls';
import RandomButton from '../RandomButton';
import styles from './styles';

/*
 * Returns a higher order component to generated a playground for the provided
 * component & properties.
 */
const playground = (Component, properties, title = 'Playground') => {
  const immutableProperties = fromJS(properties);
  const Wrapper = ({ componentProperties, setComponentProperties, props }) => {
    return (
      <div style={styles.wrapper}>
        <div style={styles.controls}>
          <h2>
            {title}
            <RandomButton onClick={ () => setComponentProperties(randomValues(immutableProperties).toJS()) }/>
          </h2>
          {renderControls(immutableProperties, fromJS(componentProperties), setComponentProperties)}
        </div>
        <Component {...props} {...componentProperties}/>
      </div>
    );
  };

  return withState('componentProperties', 'setComponentProperties', randomValues(immutableProperties).toJS(), Wrapper);
};

export default playground;
