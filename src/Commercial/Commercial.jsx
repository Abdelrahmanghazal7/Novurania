import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Commercial.css";

const ExpertIse = () => {
  return (
    <section className="sec-4" id="commercial">
      <Container>
        <Row>
          <Col md={12} xs={12} className="sec-1">
            <img
              className="logo-gold animation"
              src="images/logo-gold.png"
              alt=""
            />

            <div className="follow-4 wow fadeInUp">
              <img src="images/Vector2.png" alt="vector" />
              <p>
                <span> Lifetime </span>
                <span> LimitedManufacturer's </span>
                <span> Warranty </span>
              </p>
              <img src="images/Vector2.png" alt="vector" />
            </div>

            <div className="gold-imgs wow fadeIn" id="com1">
              <img src="images/Rectangle13.png" alt="" />
              <img src="images/Rectangle14.png" alt="" />
              <img src="images/Rectangle15.png" alt="" />
            </div>

            <div className="gold-imgs wow fadeIn" id="com2">
              <img src="images/sec5-small(1).png" alt="" />
              <img src="images/sec5-small(2).png" alt="" />
              <img src="images/sec5-small(3).png" alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ExpertIse;
