"use client";
import { Row, Col, Nav, Tab } from "react-bootstrap";
import { Container } from "react-bootstrap";
import "../../../app/page.module.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
const TechnologySection = () => {
  const navItems = [
    { eventKey: "frontend", label: "Frontend Development" },
    { eventKey: "backend", label: "Backend Development" },
    { eventKey: "ecommerce", label: "E-commerce Development" },
    { eventKey: "mobileapp", label: "Mobile Application" },
    { eventKey: "database", label: "Database" },
  ];
  const tabItems = [
    {
      eventKey: "frontend",
      technologies: [
        { name: "HTML", image: "/media/home/html.webp" },
        { name: "CSS", image: "/media/home/css.webp" },
        { name: "Bootstrap", image: "/media/home/bootstrap.webp" },
        { name: "Javascript", image: "/media/home/js.webp" },
        { name: "Angular", image: "/media/home/angular.webp" },
        { name: "React JS", image: "/media/home/reactjs.webp" },
        { name: "Vue JS", image: "/media/home/view-js.webp" },
      ],
    },
    {
      eventKey: "backend",
      technologies: [
        { name: "PHP", image: "/media/home/php.webp" },
        { name: "Laravel", image: "/media/home/laravel.webp" },
        { name: "Python", image: "/media/home/Python.webp" },
        { name: "MVC.Net", image: "/media/home/mn.webp" },
        { name: "Node JS", image: "/media/home/node.webp" },
        { name: "Ruby On Rails", image: "/media/home/newrubyrails.webp" },
      ],
    },
    {
      eventKey: "ecommerce",
      technologies: [
        { name: "Magento", image: "/media/home/magento.webp" },
        { name: "Shopfiy", image: "/media/home/shopfiy.webp" },
        { name: "WooCommerce", image: "/media/home/woo.webp" },
        { name: "Wordpress", image: "/media/home/wordpress.webp" },
        { name: "BigCommerce", image: "/media/home/BigCommerce.webp" },
        { name: "Joomla", image: "/media/home/Joomla.webp" },
        { name: "Drupal", image: "/media/home/Drupal.webp" },
        { name: "Moodle", image: "/media/home/Moodle.webp" },
      ],
    },
    {
      eventKey: "mobileapp",
      technologies: [
        { name: "IOS", image: "/media/home/ios.webp" },
        { name: "Android", image: "/media/home/Android.webp" },
        { name: "Flutter", image: "/media/home/flutter.webp" },
        { name: "React Native", image: "/media/home/reactjs.webp" },
        { name: "Kotlin", image: "/media/home/Kotlin.webp" },
        { name: "Swift", image: "/media/home/Swift.webp" },
        { name: "IONIC", image: "/media/home/IONIC.webp" },
      ],
    },
    {
      eventKey: "database",
      technologies: [
        { name: "MYSQL", image: "/media/home/mysql.webp" },
        { name: "SQL", image: "/media/home/Sql.webp" },
        { name: "Postgre SOL", image: "/media/home/Postgre.webp" },
        { name: "MongoDB", image: "/media/home/MongoDB.webp" },
        { name: "SQL-LITE", image: "/media/home/SQLite.webp" },
        { name: "Firebase", image: "/media/home/Firebase.webp" },
        { name: "Snowflake", image: "/media/home/Snowflake.webp" },
      ],
    },
  ];
  return (
    <section className="lightbluebg desktop-padding-100">
      <Container>
        <Row>
          <Col md={10}>
            <h2 className="mil-h2 fw-semibold text-white mb-30">
              <span>
                Driving<span className="mil-accent"> Business </span> Triumph
                Through<span className="mil-accent"> Technology</span>
              </span>
            </h2>
            <h5 className="text-white line-height">
              Empower your business with cutting-edge technology solutions
              tailored to your needs. From streamlined operations to enhanced
              customer experiences, our tech-driven approach ensures your
              success. Harness the latest innovations and stay ahead in today’s
              dynamic market landscape. Discover the transformative potential of
              technology for your business growth.
            </h5>
          </Col>
          <Col md={2}>
            <Image
              src="/media/home/readmore.webp"
              alt="reamore"
              width={196}
              height={196}
            />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className="technologytabs">
              <Tab.Container defaultActiveKey="frontend">
                <Row>
                  <Col sm={12}>
                    <Nav
                      variant="pills"
                      className="list gap-30 justify-content-center mt-5 mb-5"
                    >
                      {navItems.map((item, index) => (
                        <Nav.Item key={index}>
                          <Nav.Link eventKey={item.eventKey}>
                            <div className="tech">
                              <Image
                                src={`/svg/home/${item.eventKey}.svg`}
                                alt={item.label}
                                width={55}
                                height={55}
                              />
                              <h6 className="mb-0 text-white fw-semibold mt-3 line-height">
                                {item.label.split(" ").map((word, i, arr) => (
                                  <span key={i}>
                                    {word}
                                    {i < arr.length - 1 && <br />}
                                  </span>
                                ))}
                              </h6>
                            </div>
                          </Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                  </Col>
                  <Col sm={12}>
                    <Tab.Content>
                      {tabItems.map((item, index) => (
                        <Tab.Pane eventKey={item.eventKey} key={index}>
                          <div className="techlist mt-3">
                            {item.technologies.map((data, i) => (
                              <div className="text-center" key={i}>
                                <Image
                                  src={data.image}
                                  alt={data.name}
                                  width={35}
                                  height={35}
                                />
                                <p className="text-white mb-0 fw-semibold mt-3">
                                  {data.name}
                                </p>
                              </div>
                            ))}
                          </div>
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default TechnologySection;
