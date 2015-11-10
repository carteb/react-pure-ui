import React from 'react';
import RandomButton from '../RandomButton';

const IntegerControl = (props) => {
  const {label, value, onUpdate} = props;
  return (
    <div>
      <label>
        {label}
        <input type="number"
               step="1"
               value={value}
               onChange={(event) => onUpdate({ value: parseInt(event.target.value, 10) })} />
      </label>
      <RandomButton onClick={ () => onUpdate({ value: IntegerControl.randomValue(props) }) }/>
    </div>
  );
};

IntegerControl.randomValue = ({step}) => {
  const fixedStep = step || 1;
  const max = 1000;
  const min = 0;
  let number;
  do {
    number = Math.floor(Math.random() * (max - min) + min);
  } while (number % fixedStep === 1);

  return number;
};

export default IntegerControl;
