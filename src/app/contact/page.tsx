import React from "react";
import Navbar from "@/components/Navbar";
const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="contact-section" id="contact">
        <div className="contact-form-container">
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-subtitle">
            Have any questions or concerns? We would love to hear from you!
          </p>
          <form action="https://formspree.io/f/manypbbk" method="POST">
            <div className="input-group">
              <label htmlFor="name" className="input-label">
                Name
              </label>
              <input
                type="text"
                className="input-field"
                id="name"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="email" className="input-label">
                Email
              </label>
              <input
                type="email"
                className="input-field"
                id="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="message" className="input-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                required
                className="textarea-field"
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
