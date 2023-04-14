import React from 'react';
import styled from 'styled-components';

const PgStyle = styled.div`
  max-width: 500px;
  margin: 0 auto;
  font-size: 1rem;
  line-height: 1.6rem;
  p {
    font-size: 1rem;
  }

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
    p {
      font-size: 0.5rem;
    }
  }
`;

export default function PgText({ children }) {
  return (
    <PgStyle>
      <p>{children}</p>
    </PgStyle>
  );
}
