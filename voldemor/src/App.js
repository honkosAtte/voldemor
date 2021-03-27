import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
const [loggedIn, setLoggedIn] = useState(false);
const [pw, setPw] = useState('');
const [cred, setCred] = useState('');

const handlePwFormChange = event => {
  setPw(event.target.value);
}

const handlePwSubmit = event => {
  // lähetä Azure funktiolle
  console.log('submit', pw)
  setLoggedIn(true);
  setPw('');
  event.preventDefault();

}

const handleLogOut = event => {
console.log('logged out');
setLoggedIn(false);

}

  return (
    <div className="App">
        {loggedIn ? <button onClick={handleLogOut}>log out</button> : 
        <form onSubmit={handlePwSubmit}>
        <input type="password" value={pw} onChange={handlePwFormChange}></input>
        <input type="submit" value="Submit"></input>
        </form>}

        {loggedIn && <p>tähän tulee sitten niitä kuvia sitten</p>}


    </div>
  );
}

export default App;
