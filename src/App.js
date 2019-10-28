import React from 'react';
import Lists from './components/Lists'
import LogInForm from './components/LogForm'
import './App.css';

function App() {

  const isLoggedIn = false;

  return (
    <div className="App">
      {isLoggedIn ?
        <Lists />
      :
        <LogInForm />  
    }
    </div>
  );
}

export default App;
