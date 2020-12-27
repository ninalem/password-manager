import React from 'react';
import AppHeader from './components/AppHeader'
import LoginForm from './components/LoginForm'
import './App.css';

const loggedIn = false

function App (): JSX.Element {
  return (
    <div className="App">
      <AppHeader loggedIn={loggedIn} />
      { !loggedIn && <LoginForm /> }
    </div>
  );
}

export default App;
