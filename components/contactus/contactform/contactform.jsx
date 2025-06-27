"use client";

import React from "react";
import {
  Row,
  Col,
  Container,
  Form,
  Button, // ⬅ only top-level imports are needed
} from "react-bootstrap";
import { useForm } from "react-hook-form";

import "../../../app/page.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import AutoCounter from "./autocounter";

export default function ContactFormSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    reset();
  };

  return (
    <section className="blueBackground bgImage desktop-padding-100 HomeTech">
      <Container>
        <Row>
          <Col md={6} className="mb-2">
            <h1 className="text-white fw-semibold">CONTACT&nbsp;US</h1>
            <Form
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              style={{ maxWidth: 480 }}
            >
              {/* Name */}
              <Form.Group className="mb-3" controlId="name">
                <Form.Label className="text-white">Name</Form.Label>
                <Form.Control
                  placeholder="Enter your name"
                  {...register("name", { required: "Name is required" })}
                  isInvalid={!!errors.name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name?.message}
                </Form.Control.Feedback>
              </Form.Group>

              {/* Email */}
              <Form.Group className="mb-3" controlId="email">
                <Form.Label className="text-white">Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email format",
                    },
                  })}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email?.message}
                </Form.Control.Feedback>
              </Form.Group>
              {/* Phone */}
              <Form.Group className="mb-3" controlId="phone">
                <Form.Label className="text-white">Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter your phone number"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Phone number must be 10 digits",
                    },
                  })}
                  isInvalid={!!errors.phone}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.phone?.message}
                </Form.Control.Feedback>
              </Form.Group>
              {/* Message */}
              <Form.Group className="mb-4" controlId="message">
                <Form.Label className="text-white">Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Your message"
                  {...register("message")}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Send Message Now
              </Button>
            </Form>
          </Col>

          <Col md={6} className="mb-2">
            <h3 className="text-white fw-semibold">
              Initiate Your Venture with Us
            </h3>
            <p>
              Regardless of the size of your project, we will handle it with
              excellence, ensuring all standards are met. We are dedicated to
              delivering complete satisfaction.
            </p>
            <ul className="text-white">
              <li>Whatever feature you envision, we bring to life.</li>
              <li>Global support available 24/7</li>
              <li>Dynamic performance insights dashboard</li>
              <li>Clear-cut visibility</li>
              <li>Committed account specialist</li>
              <li>Tailored solutions to meet your data scraping objectives</li>
            </ul>
            <h3 className="text-white fw-semibold">
              Accelerate Innovation with world class tech teams. We’ll match you
              to an entire Remote Technology
            </h3>
            <Row className="text-white">
              <Col md="6">
                <div>
                  <h1>
                    <AutoCounter limit={85} step={10} speed={50} />+
                  </h1>
                  <h4>Client Success Stories</h4>
                </div>
              </Col>
              <Col md="6">
                <div>
                  <h1>
                    <AutoCounter limit={25} step={5} speed={50} />+
                  </h1>
                  <h4>Tech Experts Onboard</h4>
                </div>
              </Col>
              <Col md="6">
                <div>
                  <h1>
                    <AutoCounter limit={5} step={1} speed={50} />+
                  </h1>
                  <h4>Years Leading the Way</h4>
                </div>
              </Col>
              <Col md="6">
                <div>
                  <h1>
                    <AutoCounter limit={300} step={30} speed={50} />+
                  </h1>
                  <h4>Project Delivered</h4>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
