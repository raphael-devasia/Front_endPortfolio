import React from "react";
import styled from "styled-components";
import { services } from "../utils/constants";

const Services = () => {
  return (
    <Wrapper id="projects">
      <div className="section-center">
        <article className="header">
          <h3>Featured Projects</h3>
          <p>
            Browse through a curated selection of my top projects showcasing my
            front-end development skills. From visually stunning designs to
            interactive user interfaces, these projects highlight my expertise
            in creating engaging web applications. Click on each project to
            learn more about the technologies utilized and the unique features I
            implemented.
          </p>
        </article>
        <div className="services-center">
          {services.map((service) => {
            const { id, icon, title, text, git, live } = service;
            return (
              <ServiceCard key={id}>
                <img src={icon} alt="" className="image" />
                <div className="overlay">
                  <p>{text}</p>
                  <div className="project_btn">
                    <a href={live} target="_blank" className="btn">
                      Live site
                    </a>
                    <div className="btn-gap"></div>{" "}
                    {/* Add a div for the gap */}
                    <a href={git} target="_blank" className="btn">
                      Source code
                    </a>
                  </div>
                </div>
                <h4>{title}</h4>
              </ServiceCard>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 3rem 0;
  background: var(--clr-primary-10);

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
    

    h3 {
      color: var(--clr-primary-1);
      margin-top: 15px;
    }

    p {
      margin-bottom: 0;
      line-height: 1.8;
      color: var(--clr-primary-3);
      text-align: center;
    }
  }

  .services-center {
    margin-top: 4rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2.5rem;
  }
`;

const ServiceCard = styled.article`
  position: relative;
  overflow: hidden;
  background: var(--clr-primary-7);
  text-align: center;
  padding: 2.5rem 2rem;
  border-radius: var(--radius);

  .image {
    width: 300px;
    border-radius: 20px;
  }

  h4 {
    color: var(--clr-primary-1);
    margin-top: 1rem;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    opacity: 0;
    transform: translateY(100%);
    transition: 0.3s;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;

    p {
      color: var(--clr-primary-2);
      margin-bottom: 1rem;
      color: white;
      padding: 2rem;
    }

    .project_btn {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    .btn-gap {
      width: 10px; /* Adjust the width as desired */
    }
  }

  &:hover {
    .overlay {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default Services;
