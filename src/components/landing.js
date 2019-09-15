import React from "react";
import Login from "./login"
import NavigationBar from "./navigation"
import PatentItem from "./patentItem"
import { Container, Row, Col } from 'reactstrap'
import Rectangle from 'react-rectangle';

class Landing extends React.Component {

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
        <div style={{ width: "70%" }}>
          <Container>
            <Row>
              <Col style={{ background: '#607d8b', width: '100%', height: '100%' }}>
     
    <PatentItem /></Col>
              <Col  style={{ background: '#090072', width: '100%', height: '100%', radius: 5 }} > <Login /></Col>

            </Row>


          </Container>


        </div>


      </div>
    )
  }
}

export default Landing;
