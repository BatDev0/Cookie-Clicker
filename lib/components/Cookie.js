import React from 'react';
import styles from '../styles/styles';

const Cookie = (props) => {
  return (
    <div>
      <div style={styles.cookie} onClick={props.cookieClick}></div>
    </div>
  );
};

export default Cookie;