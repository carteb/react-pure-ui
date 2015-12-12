import React from 'react';
import { range } from 'lodash';
import RandomButton from '../RandomButton';
import valueOrNullOrUndefined from '../../utils/valueOrNullOrUndefined';

const ArrayControl = (props) => {
  const {
    componentRandom,
    label,
    onUpdate,
    value = [],
  } = props;
  const size = props.value !== null && typeof props.value !== 'undefined' ? props.value.length : 0;
  const Component = props.component;
  const rangeArray = range(size);

  const onUpdateEntry = (data, index) => {
    const newValue = value.slice();
    newValue[index] = data.value;
    onUpdate({ value: newValue });
  };

  return (
    <div>
      <label>{ label }</label>
      <RandomButton onClick={ () => onUpdate({ value: ArrayControl.randomValue(props) }) }/>
      <div style={{ paddingLeft: 20 }}>
        { rangeArray && rangeArray.map((index) => {
          return (
            <Component key={ index }
                       value={ value[index] }
                       onUpdate={ (data) => onUpdateEntry(data, index) }
                       random={ componentRandom } />
          );
        }) }
      </div>
      {typeof value === 'undefined' ? 'undefined' : null}
      {value === null ? 'null' : null}
    </div>
  );
};

ArrayControl.randomValue = ({ random = {}, component, componentRandom = {} }) => {
  const {
    canBeNull = true,
    canBeUndefined = true,
    min = 0,
    max = 4,
  } = random;
  const size = Math.floor(Math.random() * (max - min + 1)) + min;
  const rangeArray = range(min, size);
  const value = rangeArray.map(() => {
    return component.randomValue({ random: componentRandom });
  });
  return valueOrNullOrUndefined(value, canBeNull, canBeUndefined);
};

export default ArrayControl;
