import logo from './logo.svg';
import './App.sass';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Login from './components/Login';
import {
  BrowserRouter as Router, 
  Routes,
  Route, 
  Link
} from 'react-router-dom'; 
//<img src={logo} className="App-logo" alt="logo" />
function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          React & MUI login 
        </p>
        
      </header>
      <body className="App-body">
        <Login></Login>
      </body>
    </div>
  );
}

export default App;
