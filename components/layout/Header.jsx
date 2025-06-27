"use client";
import {
  Navbar,
  NavLink,
  Dropdown,
  Container,
  Row,
  Col,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "react-bootstrap";
import { useRef, useState } from "react";
import styles from "../../app/styles/Header.module.css";

export default function Header() {
  const [showAbout, setShowAbout] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showTechnology, setShowTechnology] = useState(false);
  const [showHire, setShowHire] = useState(false);
  const [showServicesSubMenu, setShowServicesSubMenu] = useState(false);
  const [showTechnologiesSubMenu, setShowTechnologiesSubMenu] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showTechnology, setShowTechnology] = useState(false);
  const [showHire, setShowHire] = useState(false);
  const [showServicesSubMenu, setShowServicesSubMenu] = useState(false);
  const [showTechnologiesSubMenu, setShowTechnologiesSubMenu] = useState(false);

  const aboutTimeoutRef = useRef(null);
  const servicesTimeoutRef = useRef(null);
  const techTimeoutRef = useRef(null);
  const hireTimeoutRef = useRef(null);

  // Store all timeout refs and their associated setters
  const dropdowns = [
    { ref: aboutTimeoutRef, isOpen: showAbout, setOpen: setShowAbout },
    { ref: servicesTimeoutRef, isOpen: showServices, setOpen: setShowServices },
    { ref: techTimeoutRef, isOpen: showTechnology, setOpen: setShowTechnology },
    { ref: hireTimeoutRef, isOpen: showHire, setOpen: setShowHire },
  ];

  // Generalized enter function
  const handleMouseEnter = (currentRef, isOpen, setOpen) => {
    // Clear all timeouts and close other dropdowns
    dropdowns.forEach(({ ref, setOpen: otherSetOpen }) => {
      if (ref.current) {
        clearTimeout(ref.current);
        ref.current = null;
      }
      if (ref !== currentRef) {
        otherSetOpen(false); // Close other dropdowns
      }
    });

    // Open the current dropdown if not already open
    if (!isOpen) {
      setOpen(true);
    }
  };

  // Generalized leave function
  const handleMouseLeave = (ref, isOpen, setOpen) => {
    if (!ref.current && isOpen) {
      ref.current = setTimeout(() => {
        setOpen(false);
        ref.current = null;
      }, 1000); // Reduced timeout for better responsiveness
    }
  };

  return (
    <section
      className={`header ${styles.Header} ${styles.headerSection} blueBackground`}
    >
      <Container className={`${styles.Container}`}>
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
                    <NavLink href="/" className="text-white">
                      Home{" "}
                    </NavLink>
                    <Dropdown
                      show={showAbout}
                      onMouseEnter={() =>
                        handleMouseEnter(
                          aboutTimeoutRef,
                          showAbout,
                          setShowAbout
                        )
                      }
                      onMouseLeave={() =>
                        handleMouseLeave(
                          aboutTimeoutRef,
                          showAbout,
                          setShowAbout
                        )
                      }
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
                      onMouseEnter={() =>
                        handleMouseEnter(
                          servicesTimeoutRef,
                          showServices,
                          setShowServices
                        )
                      }
                      onMouseLeave={() =>
                        handleMouseLeave(
                          servicesTimeoutRef,
                          showServices,
                          setShowServices
                        )
                      }
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
                              <DropdownItem>
                                <DropdownItem
                                  variant="white"
                                  id="dropdown-web-design"
                                  className={`${styles.dropDownToggle} bg-secondary `}
                                >
                                  Web Design
                                </DropdownItem>
                                <DropdownItem
                                  className={`${styles.dropDownMenu} ${
                                    showServicesSubMenu
                                      ? styles.dropDownMenuShow
                                      : ""
                                  } mt-0`}
                                >
                                  <DropdownItem href="#">
                                    Responsive UI/UX
                                  </DropdownItem>
                                  <DropdownItem href="#">
                                    Visual Design
                                  </DropdownItem>
                                  <DropdownItem href="#">
                                    Prototyping
                                  </DropdownItem>
                                </DropdownItem>
                              </DropdownItem>
                              <DropdownItem>
                                <DropdownItem
                                  variant="white"
                                  id="dropdown-web-design"
                                  className={`${styles.dropDownToggle} bg-secondary`}
                                >
                                  Website Development
                                </DropdownItem>
                                <DropdownItem
                                  className={`${styles.dropDownMenu} ${
                                    showServicesSubMenu
                                      ? styles.dropDownMenuShow
                                      : ""
                                  } mt-0`}
                                >
                                  <DropdownItem href="#">
                                    Web Application Dev
                                  </DropdownItem>
                                  <DropdownItem href="#">
                                    CMS (WordPress, Joomla)
                                  </DropdownItem>
                                  <DropdownItem href="#">
                                    Corporate & Enterprise Sites
                                  </DropdownItem>
                                </DropdownItem>
                              </DropdownItem>
                            </Col>
                            <Col md={6} lg={3} className="mb-3 mb-md-0">
                              <DropdownItem>
                                <DropdownItem
                                  variant="white"
                                  id="dropdown-web-design"
                                  className={`${styles.dropDownToggle} bg-secondary`}
                                >
                                  E-Commerce Development
                                </DropdownItem>
                                <DropdownItem
                                  className={`${styles.dropDownMenu} ${
                                    showServicesSubMenu
                                      ? styles.dropDownMenuShow
                                      : ""
                                  } mt-0`}
                                >
                                  <DropdownItem href="#">
                                    E-commerce Consultation
                                  </DropdownItem>
                                  <DropdownItem href="#">
                                    WooCommerce
                                  </DropdownItem>
                                  <DropdownItem href="#">Shopify</DropdownItem>
                                  <DropdownItem href="#">Magento</DropdownItem>
                                  <DropdownItem href="#">
                                    BigCommerce
                                  </DropdownItem>
                                  <DropdownItem href="#">
                                    B2B E-Commerce Web Apps
                                  </DropdownItem>
                                </DropdownItem>
                              </DropdownItem>
                              <DropdownItem>
                                <DropdownItem
                                  variant="white"
                                  id="dropdown-web-design"
                                  className={`${styles.dropDownToggle} bg-secondary`}
                                >
                                  Mobile App Development
                                </DropdownItem>
                                <DropdownItem
                                  className={`${styles.dropDownMenu} ${
                                    showServicesSubMenu
                                      ? styles.dropDownMenuShow
                                      : ""
                                  } mt-0`}
                                >
                                  <DropdownItem href="#">
                                    iOS & Android Apps
                                  </DropdownItem>
                                  <DropdownItem href="#">Flutter</DropdownItem>
                                  <DropdownItem href="#">
                                    React Native
                                  </DropdownItem>
                                  <DropdownItem href="#">Ionic</DropdownItem>
                                  <DropdownItem href="#">
                                    App Design
                                  </DropdownItem>
                                  <DropdownItem href="#">
                                    Integration & Modernization
                                  </DropdownItem>
                                </DropdownItem>
                              </DropdownItem>
                            </Col>
                            <Col md={6} lg={3}>
                              <DropdownItem>
                                <DropdownItem
                                  variant="white"
                                  id="dropdown-web-design"
                                  className={`${styles.dropDownToggle} bg-secondary`}
                                >
                                  Software Development
                                </DropdownItem>
                                <DropdownItem
                                  className={`${styles.dropDownMenu} ${
                                    showServicesSubMenu
                                      ? styles.dropDownMenuShow
                                      : ""
                                  } mt-0`}
                                >
                                  <DropdownItem href="#">
                                    Custom Software Solutions
                                  </DropdownItem>
                                  <DropdownItem href="#">Web Apps</DropdownItem>
                                  <DropdownItem href="#">
                                    Maintenance & Support
                                  </DropdownItem>
                                  <DropdownItem href="#">
                                    QA & Testing
                                  </DropdownItem>
                                </DropdownItem>
                              </DropdownItem>
                              <DropdownItem>
                                <DropdownItem
                                  variant="white"
                                  id="dropdown-web-design"
                                  className={`${styles.dropDownToggle} bg-secondary`}
                                >
                                  Data Visualization & Analytics
                                </DropdownItem>
                                <DropdownItem
                                  className={`${styles.dropDownMenu} ${
                                    showServicesSubMenu
                                      ? styles.dropDownMenuShow
                                      : ""
                                  } mt-0`}
                                >
                                  <DropdownItem href="#">
                                    BI Dashboards
                                  </DropdownItem>
                                  <DropdownItem href="#">
                                    Insights & Reporting
                                  </DropdownItem>
                                  <DropdownItem href="#">
                                    Analytics Integration
                                  </DropdownItem>
                                </DropdownItem>
                              </DropdownItem>
                              <DropdownItem>
                                <DropdownItem
                                  variant="white"
                                  id="dropdown-web-design"
                                  className={`${styles.dropDownToggle} bg-secondary`}
                                >
                                  SEO & Optimization
                                </DropdownItem>
                                <DropdownItem
                                  className={`${styles.dropDownMenu} ${
                                    showServicesSubMenu
                                      ? styles.dropDownMenuShow
                                      : ""
                                  } mt-0`}
                                >
                                  <DropdownItem href="#">
                                    On-page & Technical SEO
                                  </DropdownItem>
                                  <DropdownItem href="#">
                                    Speed & Performance Tuning
                                  </DropdownItem>
                                  <DropdownItem href="#">
                                    Ongoing Optimization
                                  </DropdownItem>
                                </DropdownItem>
                              </DropdownItem>
                            </Col>
                          </Row>
                        </Container>
                      </DropdownMenu>
                    </Dropdown>
                    <Dropdown
                      show={showTechnology}
                      onMouseEnter={() =>
                        handleMouseEnter(
                          techTimeoutRef,
                          showTechnology,
                          setShowTechnology
                        )
                      }
                      onMouseLeave={() =>
                        handleMouseLeave(
                          techTimeoutRef,
                          showTechnology,
                          setShowTechnology
                        )
                      }
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
                              <DropdownItem>
                                <DropdownItem
                                  variant="white"
                                  id="dropdown-web-design"
                                  className={`${styles.dropDownToggle} bg-secondary`}
                                >
                                  E-commerce Platforms
                                </DropdownItem>
                                <DropdownItem
                                  className={`${styles.dropDownMenu} ${
                                    showTechnologiesSubMenu
                                      ? styles.dropDownMenuShow
                                      : ""
                                  } mt-0`}
                                >
                                  <DropdownItem href="#">
                                    WordPress
                                  </DropdownItem>
                                  <DropdownItem href="#">
                                    WooCommerce
                                  </DropdownItem>
                                  <DropdownItem href="#">Shopify</DropdownItem>
                                  <DropdownItem href="#">Magento</DropdownItem>
                                  <DropdownItem href="#">
                                    BigCommerce
                                  </DropdownItem>
                                </DropdownItem>
                              </DropdownItem>
                              <DropdownItem>
                                <DropdownItem
                                  variant="white"
                                  id="dropdown-web-design"
                                  className={`${styles.dropDownToggle} bg-secondary`}
                                >
                                  Frontend
                                </DropdownItem>
                                <DropdownItem
                                  className={`${styles.dropDownMenu} ${
                                    showTechnologiesSubMenu
                                      ? styles.dropDownMenuShow
                                      : ""
                                  } mt-0`}
                                >
                                  <DropdownItem href="#">HTML</DropdownItem>
                                  <DropdownItem href="#">CSS</DropdownItem>
                                  <DropdownItem href="#">
                                    Bootstrap
                                  </DropdownItem>
                                  <DropdownItem href="#">
                                    JavaScript
                                  </DropdownItem>
                                  <DropdownItem href="#">
                                    Angular JS
                                  </DropdownItem>
                                  <DropdownItem href="#">React JS</DropdownItem>
                                  <DropdownItem href="#">Vue JS</DropdownItem>
                                </DropdownItem>
                              </DropdownItem>
                            </Col>
                            <Col md={6} lg={3}>
                              <DropdownItem>
                                <DropdownItem
                                  variant="white"
                                  id="dropdown-web-design"
                                  className={`${styles.dropDownToggle} bg-secondary`}
                                >
                                  Backend
                                </DropdownItem>
                                <DropdownItem
                                  className={`${styles.dropDownMenu} 
                                  ${
                                    showTechnologiesSubMenu
                                      ? styles.dropDownMenuShow
                                      : ""
                                  } 
                                  mt-0`}
                                >
                                  <DropdownItem href="#">PHP</DropdownItem>
                                  <DropdownItem href="#">Laravel</DropdownItem>
                                  <DropdownItem href="#">Python</DropdownItem>
                                  <DropdownItem href="#">Django</DropdownItem>
                                  <DropdownItem href="#">ASP.NET</DropdownItem>
                                  <DropdownItem href="#">Node.js</DropdownItem>
                                  <DropdownItem href="#">
                                    Ruby on Rails
                                  </DropdownItem>
                                </DropdownItem>
                              </DropdownItem>
                              <DropdownItem>
                                <DropdownItem
                                  variant="white"
                                  id="dropdown-web-design"
                                  className={`${styles.dropDownToggle} bg-secondary`}
                                >
                                  Mobile
                                </DropdownItem>
                                <DropdownItem
                                  className={`${styles.dropDownMenu} ${
                                    showTechnologiesSubMenu
                                      ? styles.dropDownMenuShow
                                      : ""
                                  } mt-0`}
                                >
                                  <DropdownItem href="#">
                                    iOS (Swift)
                                  </DropdownItem>
                                  <DropdownItem href="#">
                                    Android (Kotlin)
                                  </DropdownItem>
                                  <DropdownItem href="#">Flutter</DropdownItem>
                                  <DropdownItem href="#">
                                    React Native
                                  </DropdownItem>
                                  <DropdownItem href="#">Ionic</DropdownItem>
                                </DropdownItem>
                              </DropdownItem>
                            </Col>
                          </Row>
                        </Container>
                      </DropdownMenu>
                    </Dropdown>
                    <Dropdown
                      show={showHire}
                      onMouseEnter={() =>
                        handleMouseEnter(hireTimeoutRef, showHire, setShowHire)
                      }
                      onMouseLeave={() =>
                        handleMouseLeave(hireTimeoutRef, showHire, setShowHire)
                      }
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
                    <NavLink href="/contact-us" className="text-white">
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
  );
}
