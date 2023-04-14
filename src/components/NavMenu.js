import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MdClose, MdMenu } from 'react-icons/md';
import { Link, animateScroll as scroll } from 'react-scroll';

const NavMenuStyles = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  background: var(--dark-bg);
  ul {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    text-align: center;
    li {
      display: inline-block;
      border-radius: 8px;
      cursor: pointer;
      transition: 0.3s ease background-color;
      &:hover {
        background-color: var(--deep-dark);
      }
    }
    a {
      display: inline-block;
      font-family: 'RobotoMono Regular';
      padding: 1rem 2rem;
      color: var(--gray-1);
      font-weight: bold;
      outline: none;
    }
    .active {
      color: var(--white);
    }
  }
  .mobile-menu-icon {
    position: absolute;
    right: 1.2rem;
    top: 1.2rem;
    width: 3rem;
    background-color: var(--gray-2);
    border-radius: 0.5rem;
    cursor: pointer;
    display: none;
    outline: none;
  }
  .CloseNavIcon {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    --right: 1rem;
    padding: 0;

    .hidden-item {
      transform: translateX(calc(100% + var(--right)));
    }
    .mobile-menu-icon {
      display: inline-block;
    }
    .navItems {
      transition: 0.3s ease transform;
      background-color: var(--deep-dark);
      padding: 2rem;
      width: 100%;
      max-width: 200px;
      border-radius: 1rem;
      position: absolute;
      right: var(--right);
      top: 1rem;
      .CloseNavIcon {
        display: block;
        width: 1.5rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        * {
          pointer-events: none;
        }
      }
      li {
        display: block;
        margin-bottom: 0.5rem;
        cursor: pointer;
        a {
          border-radius: 1rem;
          /* cursor: pointer; */
          &:hover {
            background-color: var(--gray-2);
          }
        }
      }
    }
  }
`;

export default function NavMenu() {
  const [showNav, setShowNav] = useState(false);

  return (
    <NavMenuStyles
      onClick={() => setShowNav(!showNav)}
      role="button"
      onKeyDown={() => setShowNav(!showNav)}
      tabIndex={0}
    >
      <div className="mobile-menu-icon">
        <MdMenu />
      </div>
      <ul className={!showNav ? 'navItems hidden-item' : 'navItems'}>
        <div
          className="CloseNavIcon"
          onClick={() => setShowNav(!showNav)}
          role="button"
          onKeyDown={() => setShowNav(!showNav)}
          tabIndex={0}
        >
          <MdClose />
        </div>
        <li>
          {/* <NavLink to="/#home"> Home </NavLink> */}
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          {/* <NavLink to="#about">About</NavLink> */}
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          {/* <NavLink to="/#services">Services</NavLink> */}
          <Link
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Services
          </Link>
        </li>
        <li>
          {/* <NavLink to="/#projects">Projects</NavLink> */}
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
          >
            Projects
          </Link>
        </li>
        <li>
          {/* <NavLink to="#contact">Contact</NavLink> */}
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </NavMenuStyles>
  );
}
