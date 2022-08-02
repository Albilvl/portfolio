import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import React from "react";
import styled from "styled-components";
import Particle from "../Components/Particle";

function HomePage() {
  return (
    <HomePageStyled>
      <div className="particle-con">
        <Particle />
      </div>
      <div className="typography">
        <h1>
          Hi, I'm <span>Al-Bilal Bankole</span>, Software Engineer
        </h1>
        <p>
          Welcome to my website, On here you can follow my journey towards
          success in software engineering! I'm set to graduate from CUNY CSI
          with a BS in Psychology in 2022. I also recently graduated from the
          Software Engineering program at Flatiron School, and am currently
          seeking developer positions. Below you can find a link to all of my
          socials.
        </p>
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/albankole"
            target="blank"
            className="icon i-linkedin"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/Albilvl"
            target="blank"
            className="icon i-github"
          >
            <GithubIcon />
          </a>
        </div>
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }

      .i-youtube {
        &:hover {
          border: 2px solid red;
          color: red;
        }
      }
      .i-github {
        &:hover {
          border: 2px solid #5f4687;
          color: #5f4687;
        }
      }
    }
  }
`;

export default HomePage;
