import styled from "styled-components";

export const HeaderSectionStyles = styled.header`
  width: auto;
  margin: 20px 0;

  @media (min-width: 800px) {
    margin: 50px 0;
  }

  .header-section {
    &--title {
      font-family: "Concert One", sans-serif;
      font-size: 50px;
      line-height: 38px;
      color: var(--green);
      margin-bottom: 10px;

      @media (min-width: 800px) {
        font-size: 80px;
        line-height: 62px;
        margin-bottom: unset;
      }
    }
    &--bars {
      width: 150px;
      height: 20px;
    }
  }
`;
