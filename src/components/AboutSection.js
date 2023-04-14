import React from 'react';
import styled from 'styled-components';
import aboutImg from '../assets/images/about-img.jpg';

const AboutStyle = styled.div`
  margin: 5rem 0rem;
  /* height: 100vh; */
  .about_container {
    /* margin-top: 1rem; */
    display: flex;
    /* width: 100%; */
    padding: 1rem;
    .about_left {
      flex: 1.2;
      text-align: justify;
      .about_subHeading {
        font-size: 1.2rem;
      }
      .about_heading {
        font-size: 3rem;
        font-weight: bold;
        text-transform: uppercase;
        margin-bottom: 1rem;
      }
      .about_break {
        width: 18rem;
        margin-bottom: 1rem;
      }
      .about_desc {
        max-width: 600px;
      }
    }

    .about_right {
      flex: 0.8;
      display: flex;
      justify-content: center;
      align-items: center;
      .about_img_container {
        width: 55%;
        height: 25vh;
        overflow: hidden;
        object-fit: cover;
        object-position: top;
        box-shadow: 30px -25px 2px 0px var(--gray-1);
        border-radius: 1rem;
        .about-img {
          width: 100%;
          object-fit: cover;
          object-position: top;
          transition: all 5s ease-out;
          &:hover {
            object-position: bottom;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .about_container {
      flex-direction: column;
      .about_left {
        /* margin-top: 2rem; */
        flex: 1;
        text-align: left;
      }
      .about_right {
        margin-top: 2rem;
        flex: 1;
        .about_img_container {
          box-shadow: 20px -15px 2px 0px var(--gray-1);
        }
      }
    }
  }
`;
export default function AboutSection() {
  return (
    <AboutStyle id="about">
      <div className="container about_container">
        <div className="about_left">
          <p className="about_subHeading">Let me introduce myself</p>
          <h1 className="about_heading">About Me</h1>
          {/* <hr className="about_break" /> */}
          <p className="about_desc">
            I am a person who's just fond of developing. Currently doing my
            undergraduate in Computer Science from Comsats University, Islamabad
            and learning Blockchain Developement along Google Cloud Platform
            with hands-on practice. I believe in working hard and nonstop
            learning.
          </p>
        </div>
        <div className="about_right">
          <div className="about_img_container">
            <img src={aboutImg} alt="about-img" className="about-img" />
          </div>
        </div>
      </div>
    </AboutStyle>
  );
}
