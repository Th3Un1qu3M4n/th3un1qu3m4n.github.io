import React from 'react';
import styled from 'styled-components';
import HeroImg from '../assets/images/hero-img2.jpg';
import Typical from 'react-typical';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import LazyLoad from 'react-lazyload';
import LoadingSection from './LoadingSection';


const HeroStyle = styled.div`
  margin: 5rem 0rem;
  min-height: calc(100vh - 5rem);
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .hero_heading {
    /* margin-top: 10vh; */
    font-size: 2rem;
    margin-bottom: -2rem;
    position: relative;
    span {
      display: block;
      width: 100%;
    }
    .hero_name {
      font-size: 4rem;
      text-shadow: -1px 2px;
    }
  }

  .hero_image {
    max-width: 700px;
    width: 100%;
    height: 600px;
    margin: auto;
    .hero-img {
      width: 100%;
      margin: 0 auto;
      box-shadow: -2px 2px 35px 5px;
      transition: all 1s ease-in-out;
      /* position: relative; */
      &:hover {
        box-shadow: -2px 2px 65px 10px;
      }
    }
  }
  .hero_info {
    position: absolute;
    max-width: 650px;
    width: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-top: -5rem;
    font-size: 2rem;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 2rem;
    p {
      font-weight: bolder;
    }
  }
  .social-icons {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    /* margin-bottom: -2rem; */
    a {
      margin: 1rem;
      width: 2rem;
      .social-img:hover path {
        color: white;
      }
    }
  }
  @media only screen and (max-width: 786px) {
    min-height: 80vh;
    .hero_heading {
      font-size: 1.5rem;
      margin-bottom: -1rem;
      .hero_name {
        font-size: 2rem;
        text-shadow: -1px 1px 2px;
      }
    }
    .hero_image {
      max-width: 90vw;
      width: 100%;
      height: 100vw;
      margin: auto;
      .hero-img {
        width: 100%;
        margin: 0 auto;
      }
    }
    .hero_info {
      width: 80%;
      margin-top: -2rem;
      font-size: 1rem;
      padding: 0.2rem;
      /* background-color: transparent; */
      box-shadow: -2px 2px 15px 5px #111111;
      p {
        font-weight: bolder;
      }
    }
  }
`;

export default function HeroSection() {
  return (
    <LazyLoad height={50} once placeholder={<LoadingSection/>}>
    <HeroStyle id="home">
      <div className="container">
        <h1 className="hero_heading">
          <span>Hi, This is</span>
          <span className="hero_name">Muhammad Ahmed</span>
        </h1>
        <div className="hero_image">
          <img
            src={HeroImg}
            alt="hero-img"
            className="hero-img"
            loading="lazy"
          />
        </div>
        <div className="hero_info">
          <Typical
            loop={Infinity}
            wrapper="p"
            steps={[
              'Web Developer',
              2000,
              'Blockchain Developer',
              2000,
              'Linux Server Administrator',
              1000,
            ]}
          />
          {/* <hr /> */}
          {/* <PgText>--------------------------------------------</PgText> */}
          {/* <Button btnLink="/cta" btnText="This is a button" /> */}
          {/* <Button btnOutline={true} /> */}
        </div>
        <div className="social-icons">
          <a
            href="https://github.com/th3un1qu3m4n"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="social-img" />
          </a>
          <a
            href="https://www.linkedin.com/in/th3un1qu3m4n/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="social-img" />
          </a>
        </div>
      </div>
    </HeroStyle>
    </LazyLoad>
  );
}
