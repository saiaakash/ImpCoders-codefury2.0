import React from "react";

import { Button, Form } from "react-bootstrap";

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      textToDisplay: ""
    };
  }

  render() {
    return (
      <div>
        <b>REGISTER</b>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="Name" />
            <Form.Label>Date Of Birth</Form.Label>
            <Form.Control type="Date" placeholder="DD/MM/YYYY" />
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Email Address" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Re-enter Password" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Gender</Form.Label>
            <Form.Control as="select">
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Address</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>City</Form.Label>
            <Form.Control type="name" placeholder="City" />
            <Form.Label>State</Form.Label>
            <Form.Control type="Number" placeholder="State" />
            <Form.Label>Nationality</Form.Label>
            <Form.Control type="name" placeholder="Nationality" />
            <Form.Label>Document Number</Form.Label>
            <Form.Control type="Number" placeholder="Document Number" />
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default Signup;
