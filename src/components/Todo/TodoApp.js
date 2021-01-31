import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "components/Todo/TodoTemplate";
import TodoHead from "components/Todo/TodoHead";
import TodoList from "components/Todo/TodoList";
import TodoCreate from "components/Todo/TodoCreate";
import { TodoProvider } from "components/Todo/TodoContext";
import TodoDatePicker from "./TodoDatePicker";

const TodoApp = () => {
  const GlobalStyle = createGlobalStyle`
    body {
      background: #e9ecef;
    }
  `;

  return (
    <>
      <TodoProvider>
        <GlobalStyle />
        <TodoTemplate>
          <TodoHead />
          <TodoList />
          <TodoCreate />
        </TodoTemplate>
        <TodoDatePicker />
      </TodoProvider>
    </>
  );
};

export default TodoApp;
