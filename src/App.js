import LoginForm from './components/LoginForm';
import styled from 'styled-components';
import { Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Profiles from './components/Profiles';
import About from './components/About';
import HistorySample from './components/HistorySample'; 



const App = () => {

  const Circle = styled.div`
    width: 5rem;
    height: 5rem;
    background: ${props => props.color || 'black'};
    border-radius: 50%;
  `;



  return (
    <div>
       <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/loginForm">로그인 폼</Link>
        </li>
        <li>
          <Link to="/profiles">프로필 목록</Link>
        </li>
        <li>
          <Link to="/history">예제</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/loginForm" component={LoginForm} /> 
      <Route path="/profiles" component={Profiles} />
      <Route path="/history" component={HistorySample} />
    </div>
  );
};

export default App;
