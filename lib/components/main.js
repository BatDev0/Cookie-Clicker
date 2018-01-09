import React from 'react';
import ReactDOM from 'react-dom';

import Cookie from './Cookie';

class App extends React.Component {
  handleClick = () => {
    alert('Cookie clicked!');
  }

  render() {
    return (
      <Cookie cookieClick={this.handleClick} />
    );
  }
}
export default App;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);