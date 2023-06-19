import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { AuthService } from "@/services/AuthService";
import React, { useState } from "react";

type Props = {};

const contato = (props: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    general: "",
  });

  const handleNameChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmail(event.target.value);
  };

  const handleSubjectChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSubject(event.target.value);
  };

  const handleMessageChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (name === "") {
      setError((prev) => ({ ...prev, name: "Por favor digite seu nome..." }));
      return;
    }
    if (email === "") {
      setError((prev) => ({ ...prev, email: "Por favor digite seu email..." }));
      return;
    }
    if (subject === "") {
      setError((prev) => ({
        ...prev,
        subject: "Por favor digite o assunto...",
      }));
      return;
    }
    if (message === "") {
      setError((prev) => ({
        ...prev,
        message: "Por favor digite a mensagem...",
      }));
      return;
    }
    AuthService.newsletter(email)
      .then((res) => {
        setSuccess(true);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch((err) => {
        setError((prev) => ({ ...prev, general: err.message }));
      });
  };

  return (
    <>
      <Header></Header>
      <h1 className="text-2xl my-8 text-center">
        Contato Para Qualquer Dúvida
      </h1>
      <div className="container mx-auto px-4 md:px-0 flex flex-col md:flex-row">
        <form
          className="w-full md:w-1/2"
          name="sentMessage"
          id="contactForm"
          onSubmit={handleSubmit}
        >
          <div className="control-group">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Your Name"
              required
              data-validation-required-message="Please enter your name"
              value={name}
              onChange={handleNameChange}
            />
            <p className="help-block text-danger"></p>
          </div>
          <div className="control-group">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Your Email"
              required
              data-validation-required-message="Please enter your email"
              value={email}
              onChange={handleEmailChange}
            />
            <p className="help-block text-danger"></p>
          </div>
          <div className="control-group">
            <input
              type="text"
              className="form-control"
              id="subject"
              placeholder="Subject"
              required
              data-validation-required-message="Please enter a subject"
              value={subject}
              onChange={handleSubjectChange}
            />
            <p className="help-block text-danger"></p>
          </div>
          <div className="control-group">
            <textarea
              className="form-control"
              rows={6}
              id="message"
              placeholder="Message"
              required
              data-validation-required-message="Please enter your message"
              value={message}
              onChange={handleMessageChange}
            ></textarea>
            <p className="help-block text-danger"></p>
          </div>
          <div>
            <button
              className="btn btn-primary py-2 px-4"
              type="submit"
              id="sendMessageButton"
            >
              Send Message
            </button>
          </div>
        </form>
        <div className="w-full md:w-1/2">
          <h5 className="font-weight-semi-bold mb-3">Get In Touch</h5>
          <p>
            Justo sed diam ut sed amet duo amet lorem amet stet sea ipsum, sed
            duo amet et. Est elitr dolor elitr erat sit sit. Dolor diam et erat
            clita ipsum justo sed.
          </p>
          <div className="d-flex flex-column mb-3">
            <h5 className="font-weight-semi-bold mb-3">Store 1</h5>
            <p className="mb-2">
              <i className="fa fa-map-marker-alt text-primary mr-3"></i>123
              Street, New York, USA
            </p>
            <p className="mb-2">
              <i className="fa fa-envelope text-primary mr-3"></i>
              info@example.com
            </p>
            <p className="mb-2">
              <i className="fa fa-phone-alt text-primary mr-3"></i>+012 345
              67890
            </p>
          </div>
          <div className="d-flex flex-column">
            <h5 className="font-weight-semi-bold mb-3">Store 2</h5>
            <p className="mb-2">
              <i className="fa fa-map-marker-alt text-primary mr-3"></i>123
              Street, New York, USA
            </p>
            <p className="mb-2">
              <i className="fa fa-envelope text-primary mr-3"></i>
              info@example.com
            </p>
            <p className="mb-0">
              <i className="fa fa-phone-alt text-primary mr-3"></i>+012 345
              67890
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default contato;
