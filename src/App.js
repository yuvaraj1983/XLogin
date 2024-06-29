import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword]= useState('');
  const [welcomemsg, setWelcomeMsg]= useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if(username !== 'user' && password!== 'password') {
      setWelcomeMsg(`Invalid username or password`);
      
    } else {
      setWelcomeMsg(`Welcome ${username}!`)
    }
   
  }
  return (
    <div >
      <h1>Login Page</h1>
     <form onSubmit={handleSubmit}>
      <label>Username</label>
      <input required type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
      <br />
      <label>Password</label>
      <input required type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button>Submit</button>
      <br />
      <div>{welcomemsg}</div>
     </form>
    </div>
  );
}

export default App;
