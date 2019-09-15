import React from "react"
import { Card } from "react-bootstrap"
import { CardTitle, CardText } from "reactstrap"
class PatentItem extends React.Component {
  constructor() {
    super()

  }

  render() {
    return (
      <div>
        <Card >
          <Card.Body>
            <Card.Title><h3>What is a patent ?</h3></Card.Title>
            {/*<Card.Subtitle className="mb-2 text-muted">Patent Description</Card.Subtitle>*/}
            <Card.Text>
            <p1> A patent is a form of intellectual property that gives its owner the
           legal right to exclude others from making, using, selling, and
           importing an invention for a limited period of years, in exchange for
           publishing an enabling public disclosure of the invention.</p1> 
    </Card.Text>


            {/*<Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>*/}
          </Card.Body>
        </Card>

        <Card >
          <Card.Body>
            <Card.Title>Why should I get it?</Card.Title>

            <Card.Text>

              A patent gives you certain legal rights, which can deter rival
              businesses from using or copying your products or inventions.
              
              Whether you are a private inventor working from your home, a full-
              time entrepreneur, or a principal in a large corporate entity
              developing or refining products or the means of producing them,
              protecting innovation is an integral part of modern enterprise.
              
              There are many good reasons to apply for a patent including:
              
               Legal right of ownership of the invention
               Often required when applying for investment
               Protection of your product from the time the patent
              application is filed
    </Card.Text>


          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default PatentItem