import { connect } from 'react-redux';
import Score from './Score';

const getScore = (score) => {
  return score;
};

const mapStateToProps = (state) => {
  return {
    score: getScore(state.score)
  };
};

const VisibleScore = connect(
  mapStateToProps,
)(Score);

export default VisibleScore;