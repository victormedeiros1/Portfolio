import styled from "styled-components";

export const HeaderSectionStyles = styled.header`
  width: auto;
  margin: 50px 0;

  .header-section {
    &--title {
      font-family: "Concert One", sans-serif;
      font-size: 50px;
      line-height: 62px;
      color: var(--green);

      @media (min-width: 800px) {
        font-size: 80px;
        line-height: 62px;
      }
    }
    &--bars {
      width: 150px;
      height: 20px;
    }
  }
`;
