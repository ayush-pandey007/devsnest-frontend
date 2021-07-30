export const addItem = (payload) => {
  return {
    type: "ADD_ITEM",
    payload,
  };
};

export const removeItem = (payload) => {
  return {
    type: "REMOVE_ITEM",
    payload,
  };
};
export const loadTodo = () => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => dispatch({ type: "LOAD_TODO", payload: data }));
  };
};
