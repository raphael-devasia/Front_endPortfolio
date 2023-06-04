import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import heroBcg from '../assets/Application programming interface-rafiki.svg'
import resume from "../assets/Resume _front End.pdf";


const Hero = () => {
  return (
    <Wrapper className="section-center" id="/">
      <article className="content">
        <h1>
          Jino Devasia <br />
        </h1>
        <h2>I am a Front End Devoloper</h2>
        <p>
          "Through a transformative journey, I evolved from a tool and die maker
          to a front-end developer, combining my precision engineering skills
          with my newfound passion for coding to bring a fresh perspective and
          innovative solutions to the digital world."
        </p>
        <a href={resume} className="btn hero-btn"  target="_blank">
          Résumé
        </a>
      </article>
      <article className="img-container">
        <img src={heroBcg} alt="nice table" className="main-img"></img>
      </article>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
      
    }
    h2{
      font-size:2rem;
      margin-bottom:1rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    /* .img-container::before {
      content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    } */
  }
`

export default Hero
