"use client";

import { Row, Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import "../../../app/page.module.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

const ProcessSection = () => {
  return (
    <section className="blueBackground desktop-padding-100 HomeTech">
      <Container>
        <Row>
          <Col md={12} className="mb-5">
            <h1 className="text-white text-center fw-semibold">
              At Appeak , we simplify{" "}
              <span className="mil-accent">
                the process for clients to connect
              </span>{" "}
              with us and have their solutions crafted seamlessly!
            </h1>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <div className="d-flex flex-column align-items-center text-center">
              <Image
                src="/svg/contactus/branding.svg"
                width={50}
                height={50}
                alt="client"
              />
              <h5 className="text-white fw-semibold my-3">
                Submit Your Requirements
              </h5>
              <h6 className="text-white">
                Get in touch with us by filling out the form below with your
                inquiry. Just within 24 hours, our sales team will contact you
                after analyzing your business requirements to assist you
                effectively.
              </h6>
            </div>
          </Col>
          <Col md={3}>
            <div className="d-flex flex-column align-items-center text-center">
              <Image
                src="/svg/contactus/branding-6.svg"
                width={50}
                height={50}
                alt="client"
              />
              <h5 className="text-white fw-semibold my-3">
                Let's step to Confidentiality Agreement
              </h5>
              <h6 className="text-white">
                To maintain the privacy of "your idea", this NDA signing will
                keep it secure and undisclosed. We believe in providing you the
                complete peace of mind as your project's confidentiality is our
                top priority.
              </h6>
            </div>
          </Col>
          <Col md={3}>
            <div className="d-flex flex-column align-items-center text-center">
              <Image
                src="/svg/contactus/seo.svg"
                width={50}
                height={50}
                alt="client"
              />
              <h5 className="text-white fw-semibold my-3">
                Reviewing Your Submitted Details
              </h5>
              <h6 className="text-white">
                After signing the NDA, we will step ahead to review your
                specifications thoroughly.Then our team will get in touch with
                you shortly to recommend the suitable solution.
              </h6>
            </div>
          </Col>
          <Col md={3}>
            <div className="d-flex flex-column align-items-center text-center">
              <Image
                src="/svg/contactus/payment.svg"
                width={50}
                height={50}
                alt="client"
              />
              <h5 className="text-white fw-semibold my-3">Forecasted Budget</h5>
              <h6 className="text-white">
                After examine the project details and secures the required
                resources by our business manager, we will reach out to you with
                the estimated budget and approximate timeline.
              </h6>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProcessSection;
