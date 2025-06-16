import { Container, Button, Row, Col, Alert } from "react-bootstrap"

export default function WelcomePage() {
  return (
    <Container className="text-center mt-5">
      <Row className="mb-4">
        <Col>
          <h1 className="text-primary">Welcome About!</h1>
          <p className="text-secondary fs-5">
            This is a simple welcome page using React Bootstrap colors and
            components.
          </p>
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
