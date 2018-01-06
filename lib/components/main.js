import React from 'react';
import ReactDOM from 'react-dom';
import { SSL_OP_PKCS1_CHECK_2 } from 'constants';

const App = () => (
  <h2>Hello from React</h2>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);