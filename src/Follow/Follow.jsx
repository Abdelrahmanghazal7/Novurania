import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Follow.css";
import { GrFacebookOption } from "react-icons/gr";
import { AiFillYoutube } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa";

export default class Responsive extends Component {
  render() {
    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div id="follow">
        <div className="follow-7 fadeInDown">
          <img src="images/Vector2.png" alt="vector" />
          <p>FOLLOW US</p>
          <img src="images/Vector2.png" alt="vector" />
        </div>

        <div className="contact-1 fadeInUp">
          <GrFacebookOption className="i" />
          <AiFillYoutube className="i" />
          <FaLinkedinIn className="i" />
          <BsTwitter className="i" />
          <FaPinterestP className="i" />
        </div>

        <Slider className="fadeIn" {...settings}>
          <div>
            <img src="images/unsplash2.png" alt="" />
          </div>
          <div>
            <img src="images/unsplash3.png" alt="" />
          </div>
          <div>
            <img src="images/unsplash4.png" alt="" />
          </div>
          <div>
            <img src="images/unsplash5.png" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
