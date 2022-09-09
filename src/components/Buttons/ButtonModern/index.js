import React from 'react';
//Test
import { ButtonStyles } from './styles';

function ButtonModern({ link, text, target, children }) {
  return (
    <ButtonStyles href={link} target={target}>
      {children}
      {text}
    </ButtonStyles>
  );
}

export default ButtonModern;
