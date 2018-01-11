import React from 'react';
import ReactDOM from 'react-dom';

import styles from '../styles/styles';
import Score from './Score';
import Cookie from './Cookie';

class App extends React.Component {
  handleClick = () => {
    alert('Cookie clicked!');
  }

  render() {
    return (
      <div style={styles.app}>
        <Score />
        <Cookie cookieClick={this.handleClick} />
      </div>
    );
  }
}
export default App;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);