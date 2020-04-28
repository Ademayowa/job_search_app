export default (state, action) => {
  switch (action.type) {
    case 'GET_JOBS':
      return {
        ...state,
        jobs: action.payload,
        loading: false,
      };
    case 'GET_JOB':
      return {
        ...state,
        job: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
