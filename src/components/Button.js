import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButttonStyle = styled.div`
  margin-top: 2rem;
  .Button {
    font-size: 1.8rem;
    background-color: ${(props) =>
      props.btnOutline ? 'transparent' : 'var(--gray-1)'};
    padding: 0.2em 1em;
    color: ${(props) =>
      props.btnOutline ? 'var(--gray-1)' : 'var(--dark-bg)'};
    border-radius: 1rem;
    display: inline-block;
    border: 2px solid var(--gray-1);
  }
  @media only screen and (max-width: 768px) {
    .Button {
      font-size: 1.3rem;
    }
  }
`;

export default function Button({
  btnLink = '#',
  btnText = 'button',
  btnOutline = false,
}) {
  return (
    <ButttonStyle btnOutline={btnOutline}>
      <Link className="Button" to={btnLink}>
        {btnText}
      </Link>
    </ButttonStyle>
  );
}
