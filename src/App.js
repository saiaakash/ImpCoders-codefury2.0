import React from "react";
import "./App.css";
import Landing from "./components/landing"
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
      <Landing/>
    </div>  
  )
}
}

export default App;
