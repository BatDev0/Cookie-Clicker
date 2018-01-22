import { connect } from 'react-redux';
import { addScore } from 'actions/score';
import Cookie from './Cookie';

const getScore = (score) => {
  return score;
};

const mapStateToProps = (state) => {
  return {
    score: getScore(state.score)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    cookieClick: () => {
      dispatch(addScore(1));
    }
  };
};

const CookieScore = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cookie);

export default CookieScore;