import React from 'react';
import ReactDOM from 'react-dom';
import {Wrapper} from 'pure-ui';

// export for http://fb.me/react-devtools
window.React = React;

const App = () => {
  return (
    <div>Hi</div>
  );
};

ReactDOM.render(<App/>, document.getElementById('react'));
