import React from "react";
import styled from "styled-components";
import PrimaryButton from "./PrimaryButton";

function ImageSection() {
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img src="/image0.jpeg" alt="" />
      </div>
      <div className="right-content">
        <h4>
          <span>Al-Bilal Bankole</span>
        </h4>
        <p className="paragraph">
          My name is Al-Bilal but you can call me Al. I'm a Software Engineer,
          with a background in the Pyschology and coaching. After attending a
          coding bootcamp, Flatiron School, I have experience with HTML, CSS,
          Javascript, React, SQL, Ruby, Object-Oriented Programming, Ruby on
          Rails, Sinatra, ActiveRecord, Heroku, SQLite, PostgreSQL, RSpec, MVC
          Software Architecture. I'm looking for Frontend Software Engineering
          roles primarily, and secondly for roles as a Full-Stack Software
          Engineer. I am very interested in being in an environment where I can
          grow, learning languages such as Python, three.js, Java, C#, C++,
          Vue.js, etc.
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Full Name</p>
            <p>Age</p>
            <p>Languages </p>
            <p>Location</p>
            <p>Open to Relocate</p>
          </div>
          <div className="info">
            <p>: Al-Bilal Bankole</p>
            <p>: 23</p>
            <p>: English, Yoruba </p>
            <p>: New York, USA</p>
            <p>: Yes</p>
          </div>
        </div>
        <a
          href="https://docs.google.com/document/d/e/2PACX-1vQfNGUjGN-Fs5Q4lNoTHPRkWYhG8EW7Q9t6xFXnQrygUcZBtfl2brFpUIk4yBjBKTWVKvLRU5XFYvkY/pub"
          target="_blank"
        >
          <PrimaryButton title={"Download Résumé"} />
        </a>
      </div>
    </ImageSectionStyled>
  );
}

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 2rem;
    }
  }
  .left-content {
    width: 100%;
    img {
      width: 95%;
      object-fit: cover;
    }
  }
  .right-content {
    width: 100%;
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      padding: 1rem 0;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 600;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
        }
      }
    }
  }
`;
export default ImageSection;
