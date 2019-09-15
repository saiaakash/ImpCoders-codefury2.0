import React from "react";
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';

import { Button, Form, FormControl } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import db from "../firebase"


class Login extends React.Component {

  constructor() {
    super()
    this.state = {
      textToDisplay: ""
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  
  }

  handleLogin = ()=>{
    db.ref("client").once("value").then((snap)=>{
      let data= snap.val()
       let keys = Object.keys(data)

       let val =[]
       for(let i=0;i<keys.length;i++){
           val.push(data[keys[i]])
           if(data[keys[i]].email ===this.state.email){
            if(data[keys[i]].password===this.state.password){
              
              this.setState({isUserLoggedIn:true})
              alert("Logged in!! Continue to Apply")
              window.open("./register")

            }
            break;
           }
           
       }
       if(this.state.isUserLoggedIn===false){
         alert("user does not exist")
       }
      })
      
  }

  /*  onChangeHandler=event=>{
  
      console.log(event.target.files[0])
  
  }
  
  <input type="file" name="file" onChange={this.onChangeHandler}/>
  
  */



  render() {
    return (

      <div>
         <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardTitle><b>Login</b></CardTitle>
        <div>
        <Form>
          <Form.Group >
            <Form.Label>Email address</Form.Label>
            <Form.Control onChange={this.handleChange} name ="email" type="email" placeholder="Enter email" />
            
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={this.handleChange} name ="password" type="password" placeholder="Password" />
          </Form.Group>
      
          <Link to ="./signup">New user? Register </Link>
          <br></br>
          
          <Button onClick={this.handleLogin} variant="primary" >
            Login
          </Button>

        </Form>
        
      
        
      </div>
        
      </Card>
        
      </div>


    )
  }
}

export default Login;
