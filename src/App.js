import React from "react";
import "./App.css";
import Login from "./components/login"
import { Button } from "react-bootstrap";
import firebase from "./firebase"
class App extends React.Component{

  constructor(){
    super()
    this.state={
      textToDisplay:""
    }
  }

render() {
  return (
    <div>
      <h1>Hello World</h1>
      <Login/>
    </div>  
  )
}
}

export default App;
