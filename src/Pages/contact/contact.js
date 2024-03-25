import { Tilt } from "react-tilt";
import React, { useState } from "react";
import "./contact.css";

const defaultOptions = {
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

export default function About() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", { name, email, message });
    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact">
      <div className="contact-wrap">
        <h1 class="contact-header">
          <span className="color-heighlight-a">Hello there </span>, send me a
          message
        </h1>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label className="label">
            <input
              placeholder="Name"
              className="input-text"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div className="input-line"></div>
          </label>
          <br />
          <label className="label">
            <input
              placeholder="Your email..."
              className="input-text"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="input-line"></div>
          </label>
          <br />
          <label className="label">
            <textarea
              placeholder="Your message..."
              className="input-text input-field"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div className="input-line"></div>
          </label>
          <br />
          <div className="contact-button-wrap">
            <Tilt options={defaultOptions}>
              <button className="submit" type="submit">
                Submit
              </button>
            </Tilt>
          </div>
        </form>
      </div>
    </div>
  );
}
