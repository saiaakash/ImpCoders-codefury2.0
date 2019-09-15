import React from "react";

import NavigationBar from "./navigation"
import { Button, Form, FormControl } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Login extends React.Component {

  constructor() {
    super()
    this.state = {
      textToDisplay: ""
    }
  }

  render() {
    return (
      <div>
        <NavigationBar />
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            {/*<Form.Text className="text-muted">
              We will use this email to communicate with you
    </Form.Text>*/}
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
          {/* <Form.Check type="checkbox" label="Show password" /> */}
          </Form.Group>
          {/* Link to Signup page here
          */}
          <Router><Link to="./ signup.js">New User? Register here</Link></Router>
          <br></br>
          <Button variant="primary" type="Login">
            Submit
  </Button>
        </Form>
      </div>


    )
  }
}

export default Login;
