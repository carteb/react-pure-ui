import React from 'react';
import faker from 'faker';
import { TextInput } from 'belle';
import RandomButton from '../RandomButton';
import valueOrNullOrUndefined from '../../utils/valueOrNullOrUndefined';

const AvatarControl = (props) => {
  const { label, value, onUpdate } = props;
  return (
    <div>
      <label>
        {label}
        <img src={value} style={{ height: 50 }}/>
        <TextInput value={value}
                   onUpdate={(data) => onUpdate({ value: data.value })} />
        <RandomButton onClick={ () => onUpdate({ value: AvatarControl.randomValue(props) }) }/>
        {typeof value === 'undefined' ? 'undefined' : null}
        {value === null ? 'null' : null}
      </label>
    </div>
  );
};

AvatarControl.randomValue = ({ random = {} }) => {
  const {
    canBeNull = true,
    canBeUndefined = true,
  } = random;
  const value = faker.image.avatar();
  return valueOrNullOrUndefined(value, canBeNull, canBeUndefined);
};

export default AvatarControl;
