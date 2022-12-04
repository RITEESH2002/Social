import React from "react";
import Feature from "../../components/Feature/Feature";
import './Contact.css'

const Contact = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin2" id="contact">
      <div className="gpt3__whatgpt3-feature">
        <Feature title="Contact Us" />
      </div>
      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Email Address" />
        <input type="text" placeholder="Full Name" />
        <textarea cols="80" rows="8" placeholder="Message..."></textarea>
        <button type="button">SUBMIT</button>
      </div>
    </div>
  );
};

export default Contact;
