import React, { useState } from "react";
import "../Contact/Contact.css";
import Popupform from "../PopupForm/PopupForm";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, message } = formData;

    const phoneNumber = "+919139711107";
    const whatsappMessage = `Hello, I want to contact you!\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappURL, "_blank");

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="contact_container">
      <h1 className="contact_heading">Get in touch</h1>
      <div className="contact_content">
        <div className="map_container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31374.170825816866!2d76.02025711400262!3d10.597041680610694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba79461cd1b5745%3A0x96c6ecd0de2d2b4!2sGuruvayur%2C%20Kerala!5e0!3m2!1sen!2sin!4v1738643236938!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="location-map"
          />
        </div>

        <div className="contact_form_container">
          <h2>Send us a message</h2>
          <form onSubmit={handleSubmit} className="contact_form">
            <div className="form_group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form_group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form_group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                pattern="[0-9+\-\s]+"
                title="Please enter a valid phone number"
              />
            </div>

            <div className="form_group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit_btn">
              <i className="fab fa-whatsapp"></i> Send via WhatsApp
            </button>
          </form>
        </div>
      </div>
      <Popupform />
    </div>
  );
};

export default Contact;