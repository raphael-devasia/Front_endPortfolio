import React from "react";

import { skills1 ,skills2,skills3,skills4} from "../utils/constants";
import styled from "styled-components";

const Skills = () => {
  return (
    <Wrapper className="section" id="skills">
      <div className="title">
        <h2>My Skills</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center featured">
        <div className="container">
          <div className="skill-box">
            <div></div>
            <div className="skill-set">
              {skills1.map((skill) => {
                return (
                  <div className="skill-item" key={skill.id}>
                    <img src={skill.url} alt={skill.text} />
                    <h6>{skill.text}</h6>
                  </div>
                );
              })}
            </div>
            <div className="skill-set">
              {skills2.map((skill) => {
                return (
                  <div className="skill-item" key={skill.id}>
                    <img src={skill.url} alt={skill.text} />
                    <h6>{skill.text}</h6>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="skill-box">
            <div></div>
            <div className="skill-set">
              {skills3.map((skill) => {
                return (
                  <div className="skill-item" key={skill.id}>
                    <img src={skill.url} alt={skill.text} />
                    <h6>{skill.text}</h6>
                  </div>
                );
              })}
            </div>
            <div className="skill-set">
              {skills4.map((skill) => {
                return (
                  <div className="skill-item" key={skill.id}>
                    <img src={skill.url} alt={skill.text} />
                    <h6>{skill.text}</h6>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 100%;
    }
  }

  .container {
    position: relative;
    /* background: yellow; */
    border-radius: var(--radius);
    display: flex;
    gap: 1.5rem;

    .skill-box {
      width: 80%;
      padding-left:2rem;
      padding-right: 2rem;
      padding-bottom:1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius:15px;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

      .skill-set {
        margin-top: 3rem;

        width: 120%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .skill-item {
        display: flex;
        width: 100px;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        padding: 1rem;
        border-radius: 30px;

        gap: 0.5rem;
      }
    }
  }
  img {
    width: 40px;
    height: 40px;
  }
  .skill-item:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (max-width: 576px) {
    .container {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    } 
  }
`;

export default Skills;
