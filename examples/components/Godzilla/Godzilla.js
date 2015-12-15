import React from 'react';

const Godzilla = ({age, isDangerous, skin, avatar, teethSize, teeth}) => {
  return (
    <div style={{background: '#ddd', padding: 20}}>
      Godzilla
      <div>Avatar: <img src={avatar} style={{ height: 50}} /></div>
      <div>Age: {age}</div>
      <div>{isDangerous ? 'Is for sure dangerous!' : 'Is a soft creature'}</div>
      <div>
        Has a {skin.isSteel ? 'steel' : 'organic'} skin.
      </div>
      <div>
        Teeth: { teethSize && teethSize.join(', ') }.
      </div>
      <div>
        { teeth && teeth.map((tooth, index) => {
          return <div key={index} >{ tooth.isSharp ? 'Sharp' : 'Stump' } { tooth.size }inch tooth</div>;
        })}
      </div>
    </div>
  );
};

export default Godzilla;
