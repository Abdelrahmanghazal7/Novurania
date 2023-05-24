import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import { GrFacebookOption } from "react-icons/gr";
import { AiFillYoutube } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";
import { CgArrowLongRight } from "react-icons/cg";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="align-items-center">
          <Col md={4} xs={12} className="wow fadeInLeft">
            <div className="pref-first">
              <div>
                <img src="images/logo.png" alt="logo" className="final-img" />
                <p className="passion">
                  Novurania has a passion for detail in the boats it produces
                  and knows that this is a passion appreciated by experienced
                  and sophisticated owners.
                </p>

                <div className="ways">
                  <p>
                    <span>Phone:</span> +1 772-567-9200
                  </p>
                  <p>
                    <span>Fax:</span> +1 888-749-1088
                  </p>
                  <p>
                    <span>E-Mail:</span> info@novurania.com
                  </p>
                </div>
              </div>
            </div>

            <div className="social-1">
              <GrFacebookOption className="i" />
              <AiFillYoutube className="i" />
              <FaLinkedinIn className="i" />
              <AiOutlineTwitter className="i" />
              <FaPinterestP className="i" />
            </div>
          </Col>

          <Col
            md={8}
            xs={12}
            className="left-side wow fadeInRight"
            data-wow-duration="1s"
          >
            <div className="pref-link">
              <div>
                <a href="#">home</a>
                <a href="#">about</a>
                <a href="#">models</a>
                <a href="#">parts</a>
              </div>
              <div>
                <a href="#">commercial</a>
                <a href="#">dealers</a>
                <a href="#">contact</a>
              </div>
            </div>

            <div className="registration">
              <p>WARRANTY REGISTRATION</p>
              <button>
                <CgArrowLongRight className="i" />
              </button>
            </div>

            <div className="social-2">
              <GrFacebookOption className="i" />
              <AiFillYoutube className="i" />
              <FaLinkedinIn className="i" />
              <AiOutlineTwitter className="i" />
              <FaPinterestP className="i" />
            </div>
          </Col>
          <Col md={12} xs={12} className=" wow fadeIn" data-wow-duration="1s">
            <div className="copyright">
              <p>
                Copyright © Novurania of America, Inc.2105 S US 1Vero Beach,
                Florida-USA 32962
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
