import React from 'react';
import styled from 'styled-components';

const LoadingStyle = styled.div`
  margin: 5rem 0rem;
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
export default function LoadingSection() {
  return (
    <LoadingStyle id="loading">
      <h3>Loading ...</h3>
    </LoadingStyle>
  );
}
