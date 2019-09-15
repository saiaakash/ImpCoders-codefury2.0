import React from "react";
import Login from "./login"
import NavigationBar from "./navigation"
import PatentItem from "./patentItem"
import ApplicationForm from "./applicationform"
import Image from 'react-bootstrap/Image'


import { Navbar, Form, FormControl } from "react-bootstrap";

import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';


class Landing extends React.Component {


  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }


  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" expand="lg" >
                    <Navbar.Brand src="">hiPatent</Navbar.Brand>
                    <Image src="./ 20190915_145741.jpg"></Image>
                    </Navbar>
                    
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: this.state.activeTab === '1' })}
            onClick={() => { this.toggle('1'); }}
          >
           <h1> Home </h1>
           
            </NavLink>
        </NavItem>
        
      </Nav>
      <TabContent activeTab={this.state.activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="6">


              <PatentItem />







            </Col>

            <Col sm="3 "> <Login /></Col>

          </Row>
        </TabPane>
        <TabPane tabId="2">
          <ApplicationForm />

        </TabPane>
      </TabContent>
      
      </div >









    
        )
  }
}

export default Landing;
