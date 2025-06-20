import { Alert, Button, Col, Row } from "react-bootstrap"
import Container from "react-bootstrap/Container"

export default function ServicePage() {
  return (
    <Container className="text-center mt-5">
      <Row className="mb-4">
        <Col>
          <h1 className="text-primary">Welcome Service Service Pages!</h1>
        </Col>
      </Row>

      <Row className="mb-4 justify-content-center">
        <Col xs="auto">
          <Button variant="success" className="me-2">
            Get Started
          </Button>
          <Button variant="warning" className="me-2">
            Learn More
          </Button>
          <Button variant="danger">Contact Us</Button>
        </Col>
      </Row>

      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Alert variant="info">
            React Bootstrap gives you easy access to Bootstrap’s colors and
            styles in React.
          </Alert>
        </Col>
      </Row>
    </Container>
  )
}
