import { Accordion, Col, Container, Row } from "react-bootstrap"

const faqData = [
  {
    eventKey: "0",
    question: "1. Why should I choose web design services from appeak?",
    answer:
      "Our unique selling point (USP) makes us unique and preferred for your web development needs i.e. expertise and experience in the market and web design services. A customized and customer-centric approach leads us to meet specific software needs and affordable pricing through effective management of resources.",
  },
  {
    eventKey: "1",
    question: "2. What is the Appeak development process?",
    answer: (
      <>
        <p>Our development process typically involves:</p>
        <ul className="faqul">
          <li>
            Consultation: We discuss your project requirements and goals in
            detail.
          </li>
          <li>
            Planning and Strategy: We define the project scope, features,
            timeline, and budget.
          </li>
          <li>
            Design and Development: Our team designs, develops, and tests your
            app or software.
          </li>
          <li>
            Deployment and Launch: We launch your app on the app stores or
            deploy your software solution.
          </li>
          <li>
            Maintenance and Support: We provide ongoing maintenance and support
            to ensure your app or software runs smoothly.
          </li>
        </ul>
      </>
    ),
  },
  {
    eventKey: "2",
    question: "3. How much does it cost to develop a mobile app or software?",
    answer:
      "The cost of development depends on various factors like the complexity of your project, features, design requirements, and development platform. We offer flexible engagement models to suit your budget, so please contact us for a free quote.",
  },
  {
    eventKey: "3",
    question: "4. What are the benefits of choosing Appeak for my project?",
    answer: (
      <>
        <p>Appeak offers several benefits, including:</p>
        <ul className="faqul">
          <li>
            <strong>Experienced and Skilled Developers:</strong> Our team has
            extensive experience in developing mobile apps, software solutions,
            and e-commerce platforms.
          </li>
          <li>
            <strong>Custom Development:</strong> We build solutions tailored to
            your specific needs and requirements.
          </li>
          <li>
            <strong>Focus on Quality and User Experience:</strong> We prioritize
            delivering high-quality apps and software that are user-friendly and
            engaging.
          </li>
          <li>
            <strong>Transparent Communication:</strong> We keep you informed
            throughout the development process.
          </li>
        </ul>
      </>
    ),
  },
  {
    eventKey: "4",
    question: "5. How can I get started with Appeak?",
    answer:
      "Contact us today for a free consultation! We’ll discuss your project requirements and answer any questions you may have. We look forward to helping you bring your mobile app, software, or e-commerce project to life.",
  },
  {
    eventKey: "5",
    question: "6. Which technology suits best for web development?",
    answer:
      "The type of technology to use differs from project to project and the objective of the website for which it is developed. If it is a normal information awareness website then a normal CMS system like WordPress will be effective. If you aim for an e-commerce website then the use of Magento, WooCommerce, Joomla, drupal, and more is recommended. Custom web applications can use Mean and Mern stack. For mobile applications use of Swift, kotlin, flutter and React Native is suitable. Feel free to contact us to know which technology suits best your specific project needs.",
  },
]

const FaqSection = () => {
  return (
    <section className="faq pt-3 desktop-padding-100">
      <Container>
        <Row>
          <Col md={6}>
            <h2 className="mil-h2 fw-semibold text-white mb-30 text-uppercase">
              <span>
                Frequently Asked
                <span className="mil-accent">
                  <br /> Questions{" "}
                </span>
              </span>
            </h2>
          </Col>
          <Col md={6}>
            <Accordion defaultActiveKey="0">
              {faqData.map((faq) => (
                <Accordion.Item key={faq.eventKey} eventKey={faq.eventKey}>
                  <Accordion.Header>{faq.question}</Accordion.Header>
                  <Accordion.Body>{faq.answer}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default FaqSection
