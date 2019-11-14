const score = (state = { score: 0 }, action) => {
  switch (action.type) {
    case 'ADD_TO_SCORE':
      return {score: state.score + action.value};
    default:
      return state;
  }
};

export default score;