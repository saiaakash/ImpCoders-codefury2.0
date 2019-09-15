import React from "react";

import { Button } from "react-bootstrap";

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
        <h1>
          <b>REGISTER</b>
        </h1>
        <form>
          <h1>
            <b>REGISTER</b>
          </h1>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="name sur name" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Example select</Form.Label>
            <Form.Control as="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>Example multiple select</Form.Label>
            <Form.Control as="select" multiple>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
        </form>
      </div>
    );
  }
}

export default Signup;
