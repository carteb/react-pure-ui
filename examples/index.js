import React from 'react';
import ReactDOM from 'react-dom';
import Godzilla from './components/Godzilla';
import {
  playground,
  AvatarControl,
  BooleanControl,
  IntegerControl,
  cloneControlProps,
} from 'pure-ui';

// export for http://fb.me/react-devtools
window.React = React;

const controlProps = {
  age: <IntegerControl random={{step: 2, min:0, max:1000}}/>,
  avatar: <AvatarControl/>,
  isDangerous: <BooleanControl/>,
  skin: {
    isSteel: <BooleanControl/>,
  },
};
const GodzillaPlayground = playground(Godzilla, controlProps, 'Fuzz Testing');

/**
 * The code below using cloneControlProps has the same effect as initializing new controls e.g.
 *
 *    const controlPropsWithPresetValues = {
 *      age: <IntegerControl value={321}/>,
 *      avatar: <AvatarControl value={'https://upload.wikimedia.org/wikipedia/en/2/29/Godzilla_%2754_design.jpg'}/>,
 *      isDangerous: <BooleanControl />,
 *      skin: {
 *        isSteel: <BooleanControl value />,
 *      },
 *    };
 */
const controlPropsWithPresetValues = cloneControlProps(controlProps, {
  age: {value: 321},
  avatar: {value: 'https://upload.wikimedia.org/wikipedia/en/2/29/Godzilla_%2754_design.jpg'},
  skin: {
    isSteel: {value: true},
  },
});
const GodzillaPlaygroundWithPresetValues = playground(Godzilla, controlPropsWithPresetValues, 'Preset Values');

const App = () => {
  return (
    <div style={{ width: 600, margin: '0 auto' }}>
      <GodzillaPlayground />
      <GodzillaPlaygroundWithPresetValues />
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('react'));
