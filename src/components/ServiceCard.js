import React from 'react';
import styled from 'styled-components';

const ServiceCardStyled = styled.div`
  border: 2px solid var(--gray-2);
  margin: 1rem 1rem;
  border-radius: 1rem;
  min-width: 18vw;

  h3 {
    padding: 1rem;
    background-color: var(--gray-2);
    color: var(--gray-1);
  }
  ul {
    padding: 1rem;
  }
  li {
    line-height: 1.6rem;
    list-style: disc;
    list-style-position: inside;
  }
`;

export default function ServiceCard({ heading, listItems }) {
  const servicesList = listItems.map((item, index) => (
    <li key={index}>{item}</li>
  ));
  return (
    <ServiceCardStyled>
      <div className="scard-head">
        <h3>{heading}</h3>
      </div>
      {/* <p> */}
      <ul>{servicesList}</ul>
      {/* </p> */}
    </ServiceCardStyled>
  );
}
