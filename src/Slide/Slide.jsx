import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slide.css";
import { CgArrowLongRight } from "react-icons/cg";

export default class Responsive extends Component {
  render() {
    var settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
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
      <div id="slide">
        <p className="wow fadeInUp">Discover</p>
        <h1 className="wow fadeInUp">Novurania</h1>

        <div className="follow-2 wow fadeInUp">
          <img src="images/Vector2.png" alt="vector" />
          <p>Models</p>
          <img src="images/Vector2.png" alt="vector" />
        </div>

        <Slider className="wow fadeInRight" {...settings}>
          <div>
            <div className="above">
              Catamaran <br /> series
            </div>
            <img className="mego" src="images/Rectangle8.png" alt="cityscape" />
            <div className="caption">Discover</div>
          </div>
          <div>
            <div className="above">
              Chase <br /> series
            </div>
            <img className="mego" src="images/Rectangle9.png" alt="cityscape" />
            <div className="caption">Discover</div>
          </div>
          <div>
            <div className="above" id="tired">
              como 18
            </div>
            <img
              className="mego"
              src="images/Rectangle10.png"
              alt="cityscape"
            />
            <div className="caption">Discover</div>
          </div>
          <div>
            <div className="above">
              deluxe <br /> series
            </div>
            <img
              className="mego"
              src="images/Rectangle11.png"
              alt="cityscape"
            />
            <div className="caption">Discover</div>
          </div>
        </Slider>

        <div className="sec-3-discover wow fadeInDown">
          <p>
            <span> Discover </span>
            <span> All Models </span>
          </p>
          <button>
            <CgArrowLongRight className="i" />
          </button>
        </div>
      </div>
    );
  }
}
