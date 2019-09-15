import React from "react";
import Login from "./login"
import NavigationBar from "./navigation"
import PatentItem from "./patentItem"
import { Container, Row, Col } from 'reactstrap'
import { Button, Form, FormControl } from "react-bootstrap";
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';




class ApplicationForm extends React.Component {

    constructor() {
        super()
        this.state = {
            textToDisplay: ""
        }
    }

    render() {
        return (
            <div>
                <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                  <CardTitle><b>Application Form</b></CardTitle>
                  <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="Name" placeholder="Name" />
                      <Form.Label>Number</Form.Label>
                      <Form.Control type="Number" placeholder="Number" />
                      <Form.Label>City/State</Form.Label>
                      <Form.Control type="City/State" placeholder="City/State" />
                      <Form.Label>Country</Form.Label>
                      <Form.Control type="Country" placeholder="Country" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Label>What is your status?</Form.Label>
                      <Form.Control as="select">
                        <option>Startup</option>
                        <option>Individual</option>
                        <option>SME</option>
                        <option>Company</option>

                      </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect2">
                      <Form.Label>Type of Patent</Form.Label>
                      <Form.Control as="select" multiple>
                        <option>Provisional Patent</option>
                        <option>Complete Patent</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect2">
                      <Form.Label>Patent filing region</Form.Label>
                      <Form.Control as="select" multiple>
                        <option>Country 1</option>
                        <option>Country 2</option>
                        <option>Country 3</option>
                        <option>Country 4</option>
                        <option>Country 5</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Example textarea</Form.Label>
                      <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                  </Form>

                </Card>
            </div>


        )
    }
}

export default ApplicationForm;
