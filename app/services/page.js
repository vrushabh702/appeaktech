// components/MegaMenu.js
"use client"
import {
  Navbar,
  Container,
  Nav,
  Dropdown,
  ListGroup,
  Row,
  Col,
  NavItem,
  NavLink,
  DropdownToggle,
  DropdownMenu,
  ListGroupItem,
} from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretRight } from "@fortawesome/free-solid-svg-icons"
import styles from "./../styles/MegaMenu.module.css"
import { useState } from "react"

const MegaMenu = () => {
  const [showMegaMenu, setShowMegaMenu] = useState(false)

  const handleMouseEnter = () => setShowMegaMenu(true)
  const handleMouseLeave = () => setShowMegaMenu(false)
  return (
    <Container fluid className={`${styles.MegaMenuContainer}`}>
      <Navbar expand="lg" bg="light" variant="light">
        <Container fluid>
          <Nav className={`me-auto ${styles.navPadding}`}>
            <NavItem>
              <NavLink active aria-current="page" href="#">
                Regular link
              </NavLink>
            </NavItem>

            <NavItem
              className="position-static"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Dropdown show={showMegaMenu}>
                <DropdownToggle as={Nav.Link}>Mega menu</DropdownToggle>
                <DropdownMenu
                  className={`${styles.megaMenu} justify-content-center mt-0`}
                >
                  <Container>
                    <Row className="my-4">
                      <Col md={6} lg={3} className="mb-3 mb-lg-0">
                        <ListGroup variant="flush">
                          <ListGroupItem
                            className={`text-uppercase ${styles.listGroupItem}`}
                          >
                            <a href="#" className={styles.listLink}>
                              Lorem ipsum
                            </a>
                          </ListGroupItem>
                          <ListGroupItem className={styles.listGroupItem}>
                            <a href="#" className={styles.listLink}>
                              <FontAwesomeIcon
                                icon={faCaretRight}
                                className={styles.caretIcon}
                                height={20}
                                width={20}
                              />{" "}
                              Dolor sit
                            </a>
                          </ListGroupItem>
                          <ListGroupItem className={styles.listGroupItem}>
                            <a href="#" className={styles.listLink}>
                              <FontAwesomeIcon
                                icon={faCaretRight}
                                className={styles.caretIcon}
                                height={20}
                                width={20}
                              />{" "}
                              Amet consectetur
                            </a>
                          </ListGroupItem>
                          <ListGroupItem className={styles.listGroupItem}>
                            <a href="#" className={styles.listLink}>
                              <FontAwesomeIcon
                                icon={faCaretRight}
                                className={styles.caretIcon}
                                height={20}
                                width={20}
                              />{" "}
                              Cras justo odio
                            </a>
                          </ListGroupItem>
                          <ListGroupItem className={styles.listGroupItem}>
                            <a href="#" className={styles.listLink}>
                              <FontAwesomeIcon
                                icon={faCaretRight}
                                className={styles.caretIcon}
                                height={20}
                                width={20}
                              />{" "}
                              Adipisicing elit
                            </a>
                          </ListGroupItem>
                        </ListGroup>
                      </Col>
                      <Col md={6} lg={3} className="mb-3 mb-lg-0">
                        <ListGroup variant="flush">
                          <ListGroupItem
                            className={`text-uppercase ${styles.listGroupItem}`}
                          >
                            <a href="#" className={styles.listLink}>
                              Explicabo voluptas
                            </a>
                          </ListGroupItem>
                          <ListGroupItem className={styles.listGroupItem}>
                            <a href="#" className={styles.listLink}>
                              <FontAwesomeIcon
                                icon={faCaretRight}
                                className={styles.caretIcon}
                                height={20}
                                width={20}
                              />{" "}
                              Perspiciatis quo
                            </a>
                          </ListGroupItem>
                          <ListGroupItem className={styles.listGroupItem}>
                            <a href="#" className={styles.listLink}>
                              <FontAwesomeIcon
                                icon={faCaretRight}
                                className={styles.caretIcon}
                                height={20}
                                width={20}
                              />{" "}
                              Cras justo odio
                            </a>
                          </ListGroupItem>
                          <ListGroupItem className={styles.listGroupItem}>
                            <a href="#" className={styles.listLink}>
                              <FontAwesomeIcon
                                icon={faCaretRight}
                                className={styles.caretIcon}
                                height={20}
                                width={20}
                              />{" "}
                              Laudantium maiores
                            </a>
                          </ListGroupItem>
                          <ListGroupItem className={styles.listGroupItem}>
                            <a href="#" className={styles.listLink}>
                              <FontAwesomeIcon
                                icon={faCaretRight}
                                className={styles.caretIcon}
                                height={20}
                                width={20}
                              />{" "}
                              Provident dolor
                            </a>
                          </ListGroupItem>
                        </ListGroup>
                      </Col>
                      <Col md={6} lg={3} className="mb-3 mb-md-0">
                        <ListGroup variant="flush">
                          <ListGroupItem
                            className={`text-uppercase ${styles.listGroupItem}`}
                          >
                            <a href="#" className={styles.listLink}>
                              Iste quaerato
                            </a>
                          </ListGroupItem>
                          <ListGroupItem className={styles.listGroupItem}>
                            <a href="#" className={styles.listLink}>
                              <FontAwesomeIcon
                                icon={faCaretRight}
                                className={styles.caretIcon}
                                height={20}
                                width={20}
                              />{" "}
                              Cras justo odio
                            </a>
                          </ListGroupItem>
                          <ListGroupItem className={styles.listGroupItem}>
                            <a href="#" className={styles.listLink}>
                              <FontAwesomeIcon
                                icon={faCaretRight}
                                className={styles.caretIcon}
                                height={20}
                                width={20}
                              />{" "}
                              Est iure
                            </a>
                          </ListGroupItem>
                          <ListGroupItem className={styles.listGroupItem}>
                            <a href="#" className={styles.listLink}>
                              <FontAwesomeIcon
                                icon={faCaretRight}
                                className={styles.caretIcon}
                                height={20}
                                width={20}
                              />{" "}
                              Praesentium
                            </a>
                          </ListGroupItem>
                          <ListGroupItem className={styles.listGroupItem}>
                            <a href="#" className={styles.listLink}>
                              <FontAwesomeIcon
                                icon={faCaretRight}
                                className={styles.caretIcon}
                                height={20}
                                width={20}
                              />{" "}
                              Laboriosam
                            </a>
                          </ListGroupItem>
                        </ListGroup>
                      </Col>
                      <Col md={6} lg={3}>
                        <ListGroup variant="flush">
                          <ListGroupItem
                            className={`text-uppercase ${styles.listGroupItem}`}
                          >
                            <a href="#" className={styles.listLink}>
                              Cras justo odio
                            </a>
                          </ListGroupItem>
                          <ListGroupItem className={styles.listGroupItem}>
                            <a href="#" className={styles.listLink}>
                              <FontAwesomeIcon
                                icon={faCaretRight}
                                className={styles.caretIcon}
                                height={20}
                                width={20}
                              />{" "}
                              Saepe
                            </a>
                          </ListGroupItem>
                          <ListGroupItem className={styles.listGroupItem}>
                            <a href="#" className={styles.listLink}>
                              <FontAwesomeIcon
                                icon={faCaretRight}
                                className={styles.caretIcon}
                                height={20}
                                width={20}
                              />{" "}
                              Vel alias
                            </a>
                          </ListGroupItem>
                          <ListGroupItem className={styles.listGroupItem}>
                            <a href="#" className={styles.listLink}>
                              <FontAwesomeIcon
                                icon={faCaretRight}
                                className={styles.caretIcon}
                                height={20}
                                width={20}
                              />{" "}
                              Sunt doloribus
                            </a>
                          </ListGroupItem>
                          <ListGroupItem className={styles.listGroupItem}>
                            <a href="#" className={styles.listLink}>
                              <FontAwesomeIcon
                                icon={faCaretRight}
                                className={styles.caretIcon}
                                height={20}
                                width={20}
                              />{" "}
                              Cum dolores
                            </a>
                          </ListGroupItem>
                        </ListGroup>
                      </Col>
                    </Row>
                  </Container>
                </DropdownMenu>
              </Dropdown>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    </Container>
  )
}

export default MegaMenu
