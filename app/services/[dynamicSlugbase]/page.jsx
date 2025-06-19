import { Alert, Button, Col, Row } from "react-bootstrap"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// Dynamic route page for /service/[dynamicSlugbase]
export default function ServicePage({ params }) {
  const { dynamicSlugbase } = params

  return (
    <Container className="text-center mt-5">
          <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
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
