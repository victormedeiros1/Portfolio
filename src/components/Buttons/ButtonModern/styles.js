import styled from "styled-components";

export const ButtonStyles = styled.a`
  color: var(--dark);
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 14px;
  text-transform: uppercase;
  border: 1px solid var(--dark);
  border-bottom-left-radius: 90px;
  padding: 17px 40px 18px 57px;

  &:hover {
    background-color: var(--dark);
    color: var(--white);
    /* transition: 0.3s; */
  }
`;
