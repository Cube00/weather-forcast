const defaultStore = {
  data: [],
};

const weatherReducer = (state = defaultStore, action) => {
  if (action.type === "GET_DATA") {
    return { ...state, data: action.payload };
  }
  return null;
};

export default weatherReducer;
