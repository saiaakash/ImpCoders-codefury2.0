import React from "react";
import "./App.css";
import SignUp from "./components/signup"
import Landing from "./components/landing"
import PatentItem from "./components/applicationform"
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

const router = (
  <Router>
    <div>
    <Route exact path="/" component={Landing}/>
    <Route exact path="/signup" component={SignUp}/>
    <Route exact path ="/register" component ={PatentItem}/>
    
    </div>
    
</Router>
)

function App() {
 
  return (
    <div>
      {router}
    </div>  
  )
}


export default App;
