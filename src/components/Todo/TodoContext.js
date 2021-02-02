import React, { useReducer, createContext, useContext, useRef } from "react";
import axios from "axios";

const initialTodos = [
  {
    id: 1,
    text: "프로젝트 생성하기",
    isDone: true,
  },
  {
    id: 2,
    text: "컴포넌트 스타일링하기",
    isDone: true,
  },
  {
    id: 3,
    text: "Context 만들기",
    isDone: true,
  },
  {
    id: 4,
    text: "기능 구현하기",
    isDone: false,
  },
];

function todoReducer(state, action) {
  switch (action.type) {
    case "CREATE":
      saveTodoList(state.concat(action.todo));
      return state.concat(action.todo);
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo
      );
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const saveTodoList = async (todo) => {
  try {
    console.log("start saveTodoList");
    const response = await axios.post("/v1/todos", todo);
    console.log(response);
  } catch (e) {
    console.log(e);
  }
};

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(5);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};

export const useTodoState = () => {
  const context = useContext(TodoStateContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
};

export const useTodoDispatch = () => {
  const context = useContext(TodoDispatchContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
};

export const useTodoNextId = () => {
  const context = useContext(TodoNextIdContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
};
