import React from 'react';
import {Choice, Toggle} from 'belle';

const BooleanControl = ({label, value, onUpdate}) => {
  return (
    <div>
      <label>
        {label}
        <Toggle onUpdate={onUpdate}
                value={value}
                style={{ transform: 'scale(0.8)' }}
                firstChoiceStyle={{ fontSize: 13 }}
                secondChoiceStyle={{ fontSize: 13 }}>
          <Choice value>True</Choice>
          <Choice value={false}>False</Choice>
        </Toggle>
      </label>
    </div>
  );
};

BooleanControl.randomValue = () => {
  return Math.random() >= 0.5;
};

export default BooleanControl;
