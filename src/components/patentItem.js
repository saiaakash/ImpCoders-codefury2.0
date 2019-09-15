import React from "react"
import { Card} from "react-bootstrap"
class PatentItem extends React.Component{
constructor(){
super()

}

render() {
    return (
        <div>
            <Card style={{ width: '18rem' , opacity: "5%" }}>
  <Card.Body>
    <Card.Title>Patent Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Patent Description</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
        </div>
    );
}
}

export default PatentItem