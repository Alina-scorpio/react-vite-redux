const initialState = {
  list: []
};

export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export const addTask = (item) => ({
  type: ADD_TASK,
  payload: item
});
export const deleteTask = (index) => ({
  type: DELETE_TASK,
  payload: index
});


export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        list: [...state.list, action.payload]
      };
      case DELETE_TASK:
        return {
          ...state,
          list: state.list.filter((_, i) => i !== action.payload)
        };
    default:
      return state;
  }
};
