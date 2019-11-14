import React from 'react';
import ReactDOM from 'react-dom';

import styles from '../styles/styles';
import VisibleScore from './VisibleScore';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import scoreReducer from 'reducers/score';
import CookieScore from './CookieScore';

let store = createStore(scoreReducer);
class App extends React.Component {
  handleClick = () => {
    alert('Cookie clicked!');
  }

  render() {
    return (
      <Provider store={store}>
        <div style={styles.app}>
          <VisibleScore />
          <CookieScore />
        </div>
      </Provider>
    );
  }
}
export default App;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);