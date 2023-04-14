import React from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

const ProjectsCardStyled = styled.div`
  border: 2px solid var(--gray-2);
  margin: 1rem 1rem;
  border-radius: 2rem;
  overflow: hidden;
  display: flex;
  margin: 0 3%;
  width: 95%;
  z-index: 10;
  .pcard-head {
    flex: 0.4;
    height: 100%;
    max-height: 30vh;
    img {
      object-fit: cover;
      object-position: top;
      transition: all 3s ease-in-out;
      /* z-index: 100; */
      /* &:hover {
        object-position: bottom;
      } */
    }
  }
  .pcard-body {
    flex: 0.6;
    padding-bottom: 1rem;

    h3 {
      width: 100%;
      padding: 1rem;
      background-color: var(--gray-2);
      color: var(--gray-1);
    }

    p {
      padding: 1rem;
      display: flex;
      flex-wrap: wrap;
      /* justify-content: stretch; */
      width: 100%;
      small {
        padding: 0 0.2rem;
        opacity: 0.6;
        flex: 1;
        flex-wrap: wrap;
      }
    }
    hr {
      opacity: 0.4;
    }
    .p-btn {
      float: right;
      display: flex;
      /* width: 30%; */
      max-width: 300px;
      padding: 0.2rem;
      justify-content: center;
      align-items: center;
      border: 1px solid var(--gray-2);
      background-color: var(--gray-2);
      border-radius: 2rem;
      font-size: 1.2rem;
      font-weight: bold;
      margin-right: 2rem;
      .pcard-link {
        height: 50px;
        flex: 0.4;
        margin-right: 0.5rem;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    .pcard-head {
      height: 20vh;
      overflow: hidden;
    }
    .pcard-body {
      /* .p {
        width: 100%;
        .small {
          min-width: 3rem;
        }
      } */
      .p-btn {
        margin: 0 1rem;
        font-size: 1rem;
      }
    }
  }
`;

export default function ProjectsCard({
  demoImg,
  heading,
  listItems,
  desc,
  link,
}) {
  const servicesList = listItems.map((item, index) => (
    <small key={index}>{item}</small>
  ));

  return (
    <ProjectsCardStyled>
      <div className="pcard-head">
        <img src={demoImg} alt="" />
      </div>
      <div className="pcard-body">
        <h3>{heading}</h3>
        <p>{servicesList}</p>
        <hr />
        <p>{desc}</p>
        {link !== '#' && (
          <a href={link} className="p-btn">
            <FaGithub className="pcard-link" />
            view on github
          </a>
        )}
      </div>
    </ProjectsCardStyled>
  );
}
