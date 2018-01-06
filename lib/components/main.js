import React from 'react';
import ReactDOM from 'react-dom';

import Cookie from './Cookie';

class App extends React.Component {
  render() {
    return (
      <Cookie />
    )
  }
}
export default App;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);