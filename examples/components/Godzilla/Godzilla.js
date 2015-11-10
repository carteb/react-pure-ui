import React from 'react';

const Godzilla = ({age, isDangerous, skin, avatar}) => {
  return (
    <div style={{background: '#ddd', padding: 20}}>
      Godzilla
      <div>Avatar: <img src={avatar} style={{ height: 50}} /></div>
      <div>Age: {age}</div>
      <div>{isDangerous ? 'Is for sure dangerous!' : 'Is a soft creature'}</div>
      <div>
        Has a {skin.isSteel ? 'steel' : 'organic'} skin.
      </div>
    </div>
  );
};

export default Godzilla;
