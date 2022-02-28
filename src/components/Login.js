import React, { Component } from 'react';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

function Login() {
    return(
      <form className="container">
          <TextField label="Email" margin="normal" id="correo"></TextField>
          <TextField label="Password" margin="normal" id="clave"></TextField>
          <Button variant="outlined"  type="submit" value="Log in" onClick={post()} >Login</Button>
      </form>
    )
}

  function post(){
      const Http = new XMLHttpRequest();
      const url='http://localhost:8080/v1/auth';
      const data = {
          correo: document.getElementById("correo"),
          clave : document.getElementById("clave")
      }

      console.log(data.correo); 
      console.log(data.clave); 
      
      Http.open("POST", url );
      Http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      Http.send(JSON.stringify(data));

      Http.onreadystatechange = (e) => {
      console.log(Http.getAllResponseHeaders)
  }
      
 

    }
    export default Login;