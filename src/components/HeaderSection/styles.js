import styled from "styled-components";

export const HeaderSectionStyles = styled.header`
  width: auto;
  margin-bottom: 50px;

  .header-section {
    &--title {
      font-family: "Concert One", sans-serif;
      font-size: 80px;
      line-height: 62px;
      color: var(--green);
    }
    &--bars {
      width: 150px;
      height: 20px;
    }
  }
`;
