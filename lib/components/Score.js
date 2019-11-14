import React from 'react';
import PropTypes from 'prop-types';

import styles from '../styles/styles';

const Score = (props) => {
  return (
    <div>
      <div style={styles.score}>{props.score}</div>
    </div>
  );
};

Score.propTypes = {
  score: PropTypes.number.isRequired
};

export default Score;