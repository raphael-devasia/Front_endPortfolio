import React from "react";
import styled from "styled-components";
import img from "../assets/66140106-6c4e-46b6-87fe-570fc6ec9159.jpeg"
import { FaQuoteRight } from "react-icons/fa";
const Contact = () => {
  return (
    <Wrapper>
      <div className="section-center" id="contact">
        <div className="title">
          <h2>Get In Touch</h2>
          <div className="underline"></div>
        </div>
        <div className="content">
          <div>
            <p>
              Reach out to me and let's start a conversation! Whether you have a
              project in mind, want to discuss collaboration opportunities, or
              simply have a question, I'm always available to connect. Use the
              contact form below to send me a message, and I'll get back to you
              promptly. I look forward to hearing from you
            </p>
            <div className="img-container">
              <img src={img} alt="my image alt" className="person-img" />
              <span className="quote-icon">
                <FaQuoteRight />
              </span>
            </div>
          </div>

          <form
            className="contact-form"
            action="https://formspree.io/f/xdovvrge"
            method="POST"
          >
            <input
              type="text"
              className="form-input"
              placeholder="enter your name"
              name="name"
            ></input>
            <input
              type="email"
              className="form-input"
              placeholder="enter your email"
              name="_replyTo"
            ></input>
            <textarea
              type="text"
              cols="10"
              rows="5"
              charswidth="23"
              name="message"
              className="form-input"
              placeholder="write your message here"
            ></textarea>

            <button type="submit" className="submit-btn">
              Send
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 5rem 0;
  h3 {
    text-transform: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
  }
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
    padding-top: 10rem;
  }
  textarea {
    resize: vertical;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--clr-black);
  }
  .form-input {
    width: 80%;
    color: var(--clr-grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--clr-primary-5);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black);
  }
  .img-container {
    position: relative;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    margin: 2rem;
    margin-bottom: 1.5rem;
  }
  .person-img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    border-radius: 50%;
    position: relative;
  }
  .img-container::before {
    content: "";
    width: 100%;
    height: 100%;
    background: var(--clr-primary-5);
    position: absolute;
    border-radius: 50%;
    top: -0.25rem;
    right: -0.5rem;
  }
  .quote-icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 2.5rem;
    height: 2.5rem;
    display: grid;
    place-items: center;
    border-radius: 50%;
    transform: translateY(25%);
    background-color: var(--primary-500);
    color: var(--clr-primary-5);
    font-size: 3rem;
  }
  .submit-btn:hover {
    color: var(--clr-white);
  }
  @media (max-width: 576px) {
    .contact-form {
    padding-top:3rem;
    }
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 7rem 0;
  }
`;

export default Contact;
