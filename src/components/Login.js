import React, { Component } from 'react';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

function LoginView() {
    return(
      <form className="container">
          <TextField label="Email" margin="normal" id="correo"></TextField>
          <TextField label="Password" margin="normal" id="clave"></TextField>
          <Button variant="outlined"  type="submit" value="Log in" onClick={Login()} >Login</Button>
      </form>
    )
}

export default function Login() {

  const classes = useStyles();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const logIn = (e) => {
      e.preventDefault();
      if (userName === ""){
          alert("Enter your username");
      } else{
          getUserByUserName(userName)
              .then( resp => {
                  if (resp === null) alert("Oops, user not found");
                  if (resp.password === password){
                      localStorage.setItem("loggingStaus", "logged");
                      localStorage.setItem("username", userName);
                      localStorage.setItem("userpassword", password);
                      localStorage.setItem("token", response.token);
                      setToken(response.token);
                      // Once the user have been authenticated the app will navigate to the landing page
                      history.push("/TaskGrid");
                  }else alert("Oops, incorrect password");
              }).catch( () => alert("Oops, Something went wrong. Try again!!"));
      }
  }
      
 

    }
    export default LoginView;