import styled from "styled-components";

export const SkillsStyles = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  .skills {
    &--title {
      position: absolute;
      color: var(--green);
      font-family: "Concert One", sans-serif;
      font-size: 48px;
      line-height: 34px;

      @media (min-width: 800px) {
        font-size: 60px;
        line-height: 47px;
      }
    }
    &--circle {
      width: 100%;
      max-width: 700px;
    }
  }
`;
