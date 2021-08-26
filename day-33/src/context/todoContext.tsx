import React, { FC, useState, useContext, createContext } from "react";

type todoItemType = {
  title: string;
  isDone: boolean;
};

type todoContextType = {
  todos: todoItemType[];
  setTodos: any;
};

const intialState: todoContextType = {
  todos: [],
  setTodos: (todos: todoItemType) => {},
};

const TodoContext = createContext(intialState);

const todoContextProvider: FC = ({ children }) => {
  const [todos, setTodos] = useState<todoItemType[]>([]);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);

export default todoContextProvider;
