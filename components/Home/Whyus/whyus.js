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

const WhyUsSection = () => {
  const Data = [
    {
      title: "Agile at the Core",
      description:
        "Each project's unique nature means we don't adopt Agile end-to-end in every case but we uphold an Agile Methods internally. We champion self-governing teams of developers, UX architects, and QA experts, giving them the autonomy to assign tasks and hone details.",
      image: "/media/home/agile-at-the-core.webp",
    },
    {
      title: "Transparency",
      description:
        "We respect your time and with our core approach to relationship building, we ensure clear and precise communication for the product progress, milestones, deadlines, and overall cost with no hidden charges for enterprise web development. Consumer trust is our priority and we ensure to maintain the same at any cost. We schedule meetings on a weekly and monthly basis for feedback, ensure constant meetings to share progress, etc.",
      image: "/media/home/transparancy.webp",
    },
    {
      title: "Creativity",
      description:
        "We push the boundaries of creativity in our solutions. Whether it's reimagining an architecture or devising a revolutionary interaction, we strive for the best. Our emphasis on user-centric discovery means our output remains relevant for years to come.",
      image: "/media/home/creativity.webp",
    },
    {
      title: "Quality Assurance- Testing",
      description:
        "One of the major reasons our clients have been with us till now is our serious focus on quality assurance and testing. Any mobile app development, custom software development, or e-commerce website services developed at Appeak are passed through suit of quality checks and filters that ensure the things are working for which they are made, and many other areas are reviewed for improvement.",
      image: "/media/home/quality-assurance-testing.webp",
    },
    {
      title: "Success with Technology",
      description:
        "Technology is the base of all that we do, and it is very important to know what platform to use for which software in which industry to ensure the best performance and security. We are proud to say that our experienced app designers know this very well. Proper use of technology leads to proper communication, automation, and collaboration across departments and the operational chain.",
      image: "/media/home/success-with-technology.webp",
    },
    {
      title: "Around Our Clients",
      description:
        "We offer comprehensive solutions to your every need, since all of our planning, and resource management occur and revolve around client needs. No matter what business and at what stage you are, we have a range of solutions to your every need from setting up a UI/UX-based website and mobile apps to ensuring that you have a long list of landing customers.",
      image: "/media/home/around-our-clients.webp",
    },
  ];
  return (
    <section className="blueBackground desktop-padding-100">
      <Container>
        <Row>
          <Col md={12}>
            <h2 className="mil-h2 text-white fw-semibold text-center text-uppercase mb-100">
              <span>
                <span className="mil-accent">Innovation, Integrity, and </span>{" "}
                <br />
                <span className="mil-accent"> Impeccable </span> Service –
                That&apos;s Us{" "}
              </span>
            </h2>
            <div className="integrity">
              {Data.map((item, index) => (
                <div className="box rounded-15" key={index}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={113}
                    height={113}
                  />
                  <h4 className="fw-semibold logo-color text-center mb-3">
                    {item.title}
                  </h4>
                  <p className="text-white text-center">{item.description}</p>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyUsSection;
