export default (state, action) => {
  switch (action.type) {
    case 'GET_COMPANIES':
      return {
        ...state,
        companies: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
