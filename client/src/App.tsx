import React from 'react';
import AppHeader from './components/AppHeader'
import LoginForm from './components/LoginForm'
import './App.css';

const loggedIn = false

function App() {
  return (
    <div className="App">
      <AppHeader />
      { !loggedIn && <LoginForm /> }
    </div>
  );
}

export default App;
