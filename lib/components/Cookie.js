import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/styles';

const Cookie = (props) => {
  return (
    <div>
      <div style={styles.cookie} onClick={props.cookieClick}></div>
    </div>
  );
};

Cookie.propTypes = {
  cookieClick: PropTypes.func.isRequired
};

export default Cookie;