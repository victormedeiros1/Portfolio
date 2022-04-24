import React from "react";
import { ButtonStyles } from "./styles";

function Button({ link, text, target, children }) {
  return (
    <ButtonStyles href={link} target={target}>
      {children}
      {text}
    </ButtonStyles>
  );
}

export default Button;
