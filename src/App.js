import React from "react";
import "./App.css";
import Login from "./components/login"
import PatentItem from "./components/patentItem"
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
      <h1 style={{textAlign:"center"}}>Hi Patent</h1>
      <Login/>
      <PatentItem/>
    </div>  
  )
}
}

export default App;
