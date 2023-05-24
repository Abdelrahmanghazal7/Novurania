import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css";
import { CgArrowLongRight } from "react-icons/cg";

const About = () => {
  return (
    <section id="about">
      <Container>
        <Row>
          <Col md={12} xs={12} className="sec-1">
            <p className="wow fadeInDown">ABOUT</p>
            <h1 className="wow fadeInDown">Novurania</h1>

            <div className="follow-1 wow fadeIn">
              <img src="images/Vector2.png" alt="line" />
              <p>Luxury Yacht Tenders</p>
              <img src="images/Vector2.png" alt="line" />
            </div>

            <div>
              <img src="images/Vector.png" alt="vector" />
              <img src="images/Vector.png" alt="vector" />
            </div>

            <p className="sec-1-detail wow fadeInUp">
              {" "}
              We have a passion for detail in the boats we produce and know that
              this <br />
              is a passion appreciated by our knowledgeable and sophisticated
              owners.
            </p>

            <div className="video-1 wow fadeIn">
              <img src="images/Rectangle4.png" alt="video" />
            </div>
            <div className="about wow fadeInUp">
              <p>
                As the leading manufacturer of luxury yacht tenders, innovation
                is apparent in every model of our comprehensive line of boats.
              </p>
              <p>
                Our in-house engineers, equipped with the most advanced hardware
                and software applications, continue to introduce new models
                based on the needs of our direct clientele.
              </p>
              <p>
                Leading the industry through innovation has always been
                paramount at Novurania.
              </p>

              <div className="sec-1-arrow animation">
                <p>About Us</p>
                <button>
                  <CgArrowLongRight className="i" />
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
