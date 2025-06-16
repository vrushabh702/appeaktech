import { Alert, Button, Col, Container, Row } from "react-bootstrap"

// Dynamic route page for /service/[dynamicSlugbase]
export default function ServicePage({ params }) {
  const { dynamicSlugbase } = params

  return (
    <Container className="text-center mt-5">
      <Row className="mb-4">
        <Col>
          <h1 className="text-primary">
            Welcome Service {dynamicSlugbase} Pages!
          </h1>
          <p className="text-secondary fs-5 text-4xl">
            Slug: {dynamicSlugbase}
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
