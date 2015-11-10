import React from 'react';

const TestControl = ({value, onUpdate}) => {
  return (
    <div>
      Test control:
      <input type="text"
             value={value}
             onChange={(event) => onUpdate({value: event.target.value})} />
    </div>
  );
};

TestControl.randomValue = () => 0;

export default TestControl;
