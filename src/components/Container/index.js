import React from "react";
import { ContainerStyles } from "./styles";

const Container = ({ children }) => {
  return <ContainerStyles className="animations">{children}</ContainerStyles>;
};

export default Container;
