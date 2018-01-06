import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  state = {
    popularity: 100
  }
  render() {
    return (
      <div>
        <h2>Hello from Cookie Clicker</h2>
        <h3>Our popularity is {this.state.popularity}%</h3>
      </div>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);