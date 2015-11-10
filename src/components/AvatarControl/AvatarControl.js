import React from 'react';
import faker from 'faker';
import RandomButton from '../RandomButton';
import {TextInput} from 'belle';

const AvatarControl = (props) => {
  const {label, value, onUpdate} = props;
  return (
    <div>
      <label>
        {label}
        <img src={value} style={{height: 50}}/>
        <TextInput value={value}
                   onUpdate={(data) => onUpdate({value: data.value})} />
        <RandomButton onClick={ () => onUpdate({ value: AvatarControl.randomValue(props) }) }/>
      </label>
    </div>
  );
};

AvatarControl.randomValue = () => {
  return faker.image.avatar();
};

export default AvatarControl;
