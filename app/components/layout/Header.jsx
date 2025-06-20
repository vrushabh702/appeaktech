"use client"
import {
  Navbar,
  NavLink,
  Dropdown,
  Container,
  Accordion,
  Row,
  Col,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap"
import { useState } from "react"
import styles from "./../../styles/Header.module.css"

export default function Header() {
  const [showAbout, setShowAbout] = useState(false)
  const [showServices, setShowServices] = useState(false)
  const [showTechnology, setShowTechnology] = useState(false)
  const [showHire, setShowHire] = useState(false)

  const handleMouseEnter = (setter) => setter(true)
  const handleMouseLeave = (setter) => setter(false)

  return (
    <section className={`header ${styles.Header} blueBackground`}>
      <Container className={`${styles.new}`}>
        <Row className="align-items-center">
          <Col md={3}>
            <img src={"/media/home/logo.webp"} width={"100%"} height={"auto"} />
          </Col>
          <Col md={9}>
            <Navbar expand="lg" className="p-0">
              <Container>
                <Navbar aria-controls="basic-navbar-nav" />
                <Navbar className="p-0">
                  <Container className="me-auto navbar p-0">
                    <NavLink href="#" className="text-white">
                      Home{" "}
                    </NavLink>
                    <Dropdown
                      show={showAbout}
                      onMouseEnter={() => handleMouseEnter(setShowAbout)}
                      onMouseLeave={() => handleMouseLeave(setShowAbout)}
                    >
                      <DropdownToggle
                        variant="white"
                        id="dropdown-about"
                        className={`${styles.dropDownToggle} text-white`}
                      >
                        About Us
                      </DropdownToggle>
                      <DropdownMenu
                        className={`${styles.dropDownMenu} ${
                          showAbout ? styles.dropDownMenuShow : ""
                        } justify-content-center mt-0`}
                      >
                        <Container className={`${styles.containerNew}`}>
                          <Row className="my-4">
                            <Col md={6} lg={3} className="mb-3 mb-lg-0">
                              <DropdownItem href="#">Careers</DropdownItem>
                            </Col>
                            <Col md={6} lg={3} className="mb-3 mb-md-0">
                              <DropdownItem href="#">Blogs</DropdownItem>
                            </Col>
                          </Row>
                        </Container>
                      </DropdownMenu>
                    </Dropdown>
                    <Dropdown
                      show={showServices}
                      onMouseEnter={() => handleMouseEnter(setShowServices)}
                      onMouseLeave={() => handleMouseLeave(setShowServices)}
                    >
                      <DropdownToggle
                        variant="white"
                        id="dropdown-services"
                        className={`${styles.dropDownToggle} text-white`}
                      >
                        Services
                      </DropdownToggle>
                      <DropdownMenu
                        className={`${styles.dropDownMenu} ${
                          showServices ? styles.dropDownMenuShow : ""
                        } justify-content-center mt-0`}
                      >
                        <Container>
                          <Row className="my-4">
                            <Col md={6} lg={3} className="mb-3 mb-lg-0">
                              {/* <ListGroup variant="flush"> */}
                              <DropdownItem href="#">
                                Web Design Service
                              </DropdownItem>

                              <DropdownItem href="#">
                                Website Development
                              </DropdownItem>
                              {/* </ListGroup> */}
                            </Col>
                            <Col md={6} lg={3} className="mb-3 mb-md-0">
                              <DropdownItem href="#">
                                E-commerce Development
                              </DropdownItem>
                              <DropdownItem href="#">
                                Mobile App Development
                              </DropdownItem>
                            </Col>
                            <Col md={6} lg={3}>
                              <DropdownItem href="#">
                                Software Development
                              </DropdownItem>
                              <DropdownItem href="#">
                                Data Visualization & Analytics
                              </DropdownItem>
                            </Col>
                          </Row>
                        </Container>
                      </DropdownMenu>
                    </Dropdown>
                    <Dropdown
                      show={showTechnology}
                      onMouseEnter={() => handleMouseEnter(setShowTechnology)}
                      onMouseLeave={() => handleMouseLeave(setShowTechnology)}
                    >
                      <DropdownToggle
                        variant="white"
                        id="dropdown-technology"
                        className={`${styles.dropDownToggle} text-white`}
                      >
                        Technology
                      </DropdownToggle>
                      <DropdownMenu
                         className={`${styles.dropDownMenu} ${
                          showTechnology ? styles.dropDownMenuShow : ""
                        } justify-content-center mt-0`}
                      >
                        <Container>
                          <Row className="my-4">
                            <Col md={6} lg={3} className="mb-3 mb-lg-0">
                              <DropdownItem href="#">
                                E-commerce Development
                              </DropdownItem>
                              <DropdownItem href="#">
                                Front End Development
                              </DropdownItem>
                            </Col>
                            <Col md={6} lg={3}>
                              <DropdownItem href="#">
                                Back End Development
                              </DropdownItem>
                              <DropdownItem href="#">
                                Mobile App Development
                              </DropdownItem>
                            </Col>
                          </Row>
                        </Container>
                      </DropdownMenu>
                    </Dropdown>
                    <Dropdown
                      show={showHire}
                      onMouseEnter={() => handleMouseEnter(setShowHire)}
                      onMouseLeave={() => handleMouseLeave(setShowHire)}
                    >
                      <DropdownToggle
                        variant="white"
                        id="dropdown-hire"
                        className={`${styles.dropDownToggle} text-white`}
                      >
                        Hire Tech Expert
                      </DropdownToggle>
                      <DropdownMenu
                         className={`${styles.dropDownMenu} ${
                          showHire ? styles.dropDownMenuShow : ""
                        } justify-content-center mt-0`}
                      >
                        <Container>
                          <Row className="my-4">
                            <Col md={6} lg={3} className="mb-3 mb-lg-0">
                              <DropdownItem href="#">
                                Hire PHP Developers
                              </DropdownItem>
                              <DropdownItem href="#">
                                Hire Laravel Developers
                              </DropdownItem>
                            </Col>
                            <Col md={6} lg={3}>
                              <DropdownItem href="#">
                                Hire Wordpress Developers
                              </DropdownItem>
                              <DropdownItem href="#">
                                Hire Node.Js Developers
                              </DropdownItem>
                              <DropdownItem href="#">
                                Hire Flutter Developers
                              </DropdownItem>
                            </Col>
                          </Row>
                        </Container>
                      </DropdownMenu>
                    </Dropdown>
                    <NavLink href="#" className="text-white">
                      Case Studies{" "}
                    </NavLink>
                    <NavLink href="#" className="text-white">
                      Contact Us{" "}
                    </NavLink>
                    <NavLink href="#" className="text-white bookNowButton">
                      Book a call{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="14"
                        viewBox="0 0 18 14"
                        fill="none"
                      >
                        <path
                          d="M1 7H17M17 7L11.4 1M17 7L11.4 13"
                          stroke="#2EDCCF"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </NavLink>
                  </Container>
                </Navbar>
              </Container>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
