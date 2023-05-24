import React from "react";
import "./Contact.css";
import { CgArrowLongRight } from "react-icons/cg";

const Contact = () => {
  return (
    <section id="contact">
      <span className="contact100-form-title fadeInUp">
        <p>contact</p>
        <h1>Novurania</h1>

        <div className="form-sec">
          <img src="images/Vector2.png" alt="vector" />
          <p>get in touch</p>
          <img src="images/Vector2.png" alt="vector" />
        </div>
      </span>

      <form className="contact100-form validate-form fadeIn">
        <div className="div-11">
          <div className="wrap-input100">
            <label className="label-input100">Your Name*</label>
            <input
              id="first-name"
              className="input100"
              type="text"
              name="name"
              placeholder="Enter Your Name"
            />
            <span className="focus-input100"></span>
          </div>

          <div className="wrap-input100">
            <label className="label-input100">Email Address*</label>
            <input
              className="input100"
              type="email"
              name="email"
              placeholder="Enter Your Email"
            />
            <span className="focus-input100"></span>
          </div>
        </div>

        <div className="div-11">
          <div className="wrap-input100">
            <label className="label-input100">Phone Number*</label>
            <input
              className="input100"
              type="tel"
              name="phone"
              placeholder="Eg. +1 800 000000"
            />
            <span className="focus-input100"></span>
          </div>

          <div className="wrap-input100">
            <label className="label-input100">Subject</label>
            <input
              className="input100"
              type="text"
              name="subject"
              placeholder="Your Subject"
            />
            <span className="focus-input100"></span>
          </div>
        </div>

        <div className="contact__form-field">
          <label className="label-input100">Message</label>
          <textarea
            cols="30"
            rows="5"
            placeholder="Type your message here..."
            className="contact__form-input"
            name="message"
          />
        </div>

        <div className="container-contact100-form-btn">
          <p>
            <span> Send your </span>
            <span> request to us </span>
          </p>
          <button className="contact100-form-btn">
            <CgArrowLongRight className="i" />
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
