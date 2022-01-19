import styled from "styled-components";

export const SkillsStyles = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 800px) {
    height: 100vh;
    min-height: 720px;
  }

  .skills {
    &--title {
      position: absolute;
      color: var(--green);
      font-family: "Concert One", sans-serif;
      font-size: 48px;
      line-height: 34px;
      margin-left: 12px;

      @media (min-width: 800px) {
        font-size: 60px;
        line-height: 47px;
        margin-left: 30px;
      }
    }
    &--circle {
      width: 100%;
      max-width: 700px;
    }
  }
`;
