import React from "react"
import { Card} from "react-bootstrap"
class PatentItem extends React.Component{
constructor(){
super()

}

render() {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Patent Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Patent Description</Card.Subtitle>
    <Card.Text>
      Thermo nuclear weapon industry component
    </Card.Text>
    <Card.Link href="#">Read more</Card.Link>
    
  </Card.Body>
</Card>
        </div>
    );
}
}

export default PatentItem