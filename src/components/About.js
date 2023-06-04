import React, { useState } from "react";
import styled from "styled-components";
import aboutImg from "../assets/maintenance-animate.svg"
import { Link } from "react-router-dom";

const About = () => {
 const[isReadmore,setIsReadmore]= useState(false)
 const handleReadmore=()=>{
  setIsReadmore(!isReadmore)
 }
  return (
    <main id="about">
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk"></img>
        <article>
          <div className="title">
            <h2>
              🚀 A Journey of Transformation:
              <br /> From Tools to Code
            </h2>
            <div className="underline"></div>
            <h6>
              Get ready to embark on an incredible journey with me—
              <br />a journey that took me from the world of tool and die making
              to the thrilling realm of coding.
              <br /> This is a story that defies expectations and ignites a
              passionate love for technology. Let's dive in and discover how one
              unexpected twist changed the course of my life forever
            </h6>
            <p>
              In 2008, I embarked on a life-changing adventure in India,
              pursuing a diploma in tool and die making. For three years, I
              dedicated myself to full-time study, fueling my passion for
              learning and personal growth. This experience laid the foundation
              for my future endeavors when I made the decision to move to
              Canada.
              <br />
              At Sheridan College, I continued my education and specialized in
              tool making over a period of two years. Through focused
              coursework, I deepened my understanding of this craft and achieved
              a tool making provincial license from the esteemed Ontario Trade
              School. With over a decade of experience as a tool and die maker,
              I developed a strong skill set and consistently delivered
              exceptional results.
              <br />
              However, life took an unexpected turn in 2021. An accident
              disrupted my career trajectory and forced me to reassess my
              professional path. While it was a challenging and disheartening
              time, I refused to let it define me. Instead, I embraced the
              opportunity for a fresh start and set my sights on the world of
              coding.
              {isReadmore ? (
                <p>
                  <br /> Transitioning into the tech field presented its own set
                  of challenges. Coming from a manufacturing background, I had
                  limited knowledge of the digital landscape. But my
                  determination pushed me forward. Drawing upon my elementary
                  understanding of HTML from my early years, I embarked on a
                  journey of self-guided learning. I sought guidance from
                  various sources, such as books, YouTube videos, and blogs,
                  absorbing as much knowledge as possible.
                  <br /> Each step in my coding journey brought a sense of
                  accomplishment. I vividly remember the excitement of printing
                  a star pattern on my console—a small but significant
                  achievement that symbolized the untapped potential within me.
                  To maximize my learning opportunities, I transformed my car
                  into a mobile learning station, embracing coding during my
                  spare moments while working as an Uber driver.
                  <br /> After ten months of unwavering dedication and countless
                  lines of code, I reached a pivotal milestone—I successfully
                  deployed my very first fully functional website. It was a
                  moment of immense pride and realization. I discovered a deep
                  passion for coding, finding joy in every line I wrote and
                  every project I completed. This journey has taught me that
                  with determination and persistence, anyone can achieve
                  extraordinary things, regardless of their background or access
                  to mentors.
                  <br />
                  Today, I stand tall, ready to embrace new challenges and
                  continue my growth as a developer. Each day presents an
                  opportunity to expand my knowledge and skills, and I eagerly
                  pursue those opportunities. I am driven by a desire to connect
                  with remarkable individuals who appreciate the value of hard
                  work and share in the joy of creative achievement.
                  <br />
                  As you explore my portfolio, I invite you to witness the
                  transformation of a tool and die maker into a passionate
                  coder. Together, let's harness the power of technology, engage
                  in meaningful discussions, and shape a future brimming with
                  boundless possibilities.
                  <span onClick={handleReadmore}>...read less</span>
                </p>
              ) : (
                <span onClick={handleReadmore}>...read more</span>
              )}
            </p>
          </div>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  span {
    color: black;
    font-weight: 600;
  }
  h6 {
    margin-top: 2rem;
    margin-bottom: 2rem;
    line-height: 2;
  }
  h2 {
    line-height: 1.3;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 0rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 768px) {
    h6 {
      font-size: 16px; /* Increase font size for smaller devices */
    }
  }
  @media (max-width: 992px) {
    img{
      display:none;
    }
  }
`;
export default About;
