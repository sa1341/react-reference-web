import LoginForm from './components/LoginForm';
import { createGlobalStyle } from 'styled-components';
import { Route, Link } from 'react-router-dom';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import { TodoProvider } from './components/TodoContext';

const App = () => {

  
  const GlobalStyle = createGlobalStyle`
    body {
      background: #e9ecef;
    }
  `;


  return (
    <>
    <TodoProvider>
      <GlobalStyle/>
      <TodoTemplate>
        <TodoHead/>
        <TodoList/>
        <TodoCreate/>
      </TodoTemplate>
    </TodoProvider>
    </>
  );
};

export default App;
