import React from "react";


import { Button, Navbar, NavDropdown, Nav, Form, FormControl } from "react-bootstrap";

class NavigationBar extends React.Component {

    constructor() {
        super()
        this.state = {
            textToDisplay: ""
        }
    }

    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" expand="lg" >
                    <Navbar.Brand href="#home">hiPatent</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                                                    </Nav>
                        
                        
                    </Navbar.Collapse>
                </Navbar>

            </div>


        )
    }
}

export default NavigationBar;
