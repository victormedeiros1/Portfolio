import styled from "styled-components";

export const SkillsStyles = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  &__title {
    position: absolute;
    color: var(--green);
    font-family: "Concert One", sans-serif;
    font-size: 40px;
    line-height: 26px;
    margin-left: 12px;

    @media (min-width: 500px) {
      font-size: 48px;
      line-height: 34px;
    }

    @media (min-width: 800px) {
      font-size: 54px;
      line-height: 41px;
      margin-left: 30px;
    }
  }
`;

export const Universe = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 800px) {
    height: 100vh;
    min-height: 720px;
  }
`;

export const Orbit = styled.div`
  position: absolute;
  border: 2px solid red;
  border-radius: 50%;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;

  animation: rotateRight 10s infinite linear;

  @keyframes rotateRight {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Skill = styled.img`
  position: absolute;
  top: -50px;
  left: calc(50% - 50px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
`;
