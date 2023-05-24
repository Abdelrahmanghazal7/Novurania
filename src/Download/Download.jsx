import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Download.css";
import { CgArrowLongDown } from "react-icons/cg";

const Projects = () => {
  return (
    <section id="download">
      <div className="sec-2"></div>
      <Container fluid="lg">
        <Row>
          <Col md={4} sm={8} xs={12}>
            <div className="sec-2-left wow fadeInLeft">
              <div className="lux">
                <h1>Novurania</h1>

                <p>LUXURY TENDER GUIDE</p>
              </div>
              <div className="download">
                <p>Download</p>

                <button>
                  <CgArrowLongDown className="i" />
                </button>
              </div>
            </div>
          </Col>

          <Col md={8} sm={4} xs={12} className="sec-2-images wow fadeInRight">
            <img src="images/Rectangle5.png" alt="" />
            <img src="images/Rectangle6.png" alt="" />
            <img src="images/Rectangle7.png" alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
