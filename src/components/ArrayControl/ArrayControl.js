import React from 'react';
import { range } from 'lodash';
import RandomButton from '../RandomButton';
import valueOrNullOrUndefined from '../../utils/valueOrNullOrUndefined';
import randomValues from '../playground/randomValues';
import renderNestedArrayControls from './renderNestedArrayControls';
import renderArrayControls from './renderArrayControls';

const isReactComponent = (control) => {
  if (typeof control === 'function') {
    return true;
  } else if (typeof control === 'object' && typeof control.render === 'function') {
    return true;
  }

  return false;
};

const ArrayControl = (props) => {
  const {
    controlRandom,
    label,
    onUpdate,
    value = [],
  } = props;

  const size = props.value !== null && typeof props.value !== 'undefined' ? props.value.length : 0;
  const rangeArray = range(size);

  const onUpdateEntry = (data, index) => {
    const newValue = value.slice();
    newValue[index] = data.value;
    onUpdate({ value: newValue });
  };

  return (
    <div>
      <label>{ label } [</label>
      <RandomButton onClick={ () => onUpdate({ value: ArrayControl.randomValue(props) }) }/>
      <div style={{ paddingLeft: 20 }}>
        { isReactComponent(props.control) ?
          renderArrayControls(props.control, rangeArray, value, onUpdateEntry, controlRandom) :
          renderNestedArrayControls(props.control, rangeArray, value, onUpdateEntry) }
      </div>
      {typeof value === 'undefined' ? 'undefined' : null}
      {value === null ? 'null' : null}
      <div>]</div>
    </div>
  );
};

ArrayControl.randomValue = ({ random = {}, control, controlRandom = {} }) => {
  const {
    canBeNull = true,
    canBeUndefined = true,
    min = 0,
    max = 4,
  } = random;
  const size = Math.floor(Math.random() * (max - min + 1)) + min;
  const rangeArray = range(min, size);

  let value;
  if (!isReactComponent(control)) {
    value = rangeArray.map(() => {
      return randomValues(control);
    });
  } else {
    value = rangeArray.map(() => {
      return control.randomValue({ random: controlRandom });
    });
  }

  return valueOrNullOrUndefined(value, canBeNull, canBeUndefined);
};

export default ArrayControl;
