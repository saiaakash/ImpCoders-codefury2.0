import React from "react";
import db from "../firebase"
import { Button, Form } from "react-bootstrap";
import NavigationBar from "./navigation"
class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    
  }
  sendDataToDatabase= ()=>{
    
    const key = db.ref("client").push().key

    const newItem={}
    newItem[key]=this.state

    db.ref("client").update(newItem)
          
  }
  render() {
    return (
      <div>
        <NavigationBar/>
        <b>REGISTER</b>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control  onChange={this.handleChange} name ="name" type="name" placeholder="Name" />
            <Form.Label>Date Of Birth</Form.Label>
            <Form.Control  onChange={this.handleChange} name = "dob" type="Date" placeholder="DD/MM/YYYY" />
            <Form.Label>Email Address</Form.Label>
            <Form.Control onChange={this.handleChange} name = "email" type="email" placeholder="Email Address" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={this.handleChange} name ="password" type="password" placeholder="Password" />
            
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Gender</Form.Label>
            <Form.Control onChange={this.handleChange} name ="gender" as="select">


              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Address</Form.Label>
            <Form.Control onChange={this.handleChange} name ="address" as="textarea" rows="3" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>City</Form.Label>
            <Form.Control onChange={this.handleChange} name="city" type="name" placeholder="City" />
            <Form.Label>State</Form.Label>
            <Form.Control onChange={this.handleChange} name="stateName" type="name" placeholder="State" />
            <Form.Label>Nationality</Form.Label>
            <Form.Control onChange={this.handleChange} name = "nationality" type="name" placeholder="Nationality" />
            <Form.Label>Document Number</Form.Label>
            <Form.Control onChange={this.handleChange} name="document no" type="Number" placeholder="Document Number" />
          </Form.Group>
          <Button onClick={this.sendDataToDatabase}>save</Button>
        </Form>
      </div>
    );
  }



}

export default Signup;
