import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Header.css";
import "../NavBar/NavBar.css";
import { CgArrowLongRight } from "react-icons/cg";

const Header = ({ click }) => {
  return (
    <header>
      <Container className={click ? "head-lg" : "regular"}>
        <Row>
          <Col md={7} sm={5} xs={12} className="bannartext">
            <div className="back"></div>
            <div className="col-1 wow fadeInLeft">
              <h1>Novurania</h1>

              <p>A Passion for Detail</p>

              <div className="discover">
                <p>Discover</p>

                <button>
                  <CgArrowLongRight className="i" />
                </button>
              </div>
            </div>
          </Col>

          <Col md={5} sm={7} xs={12} className="col-2 wow fadeInRight">
            <img src="images/Rectangle1.png" alt="" />
            <img src="images/Rectangle2.png" alt="" />
            <img src="images/Rectangle3.png" alt="" />
          </Col>
        </Row>
      </Container>
      <a id="scroll-btn" href="#about"></a>
    </header>
  );
};

export default Header;
