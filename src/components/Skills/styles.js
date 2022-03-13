import styled from "styled-components";

export const ContainerSkills = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SkillsStylesNoBackground = styled.section`
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
    &--circle {
      width: 90%;

      @media (min-width: 800px) {
        width: 50%;
        max-width: 700px;
      }

      @media (min-width: 1440px) {
        width: 100%;
        max-width: 900px;
      }
    }
  }
`;

export const SkillsStyles = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  max-width: none;
  margin: 0;

  -webkit-mask-image: url("/images/mask.svg");
  mask-image: url("/images/mask.svg");
  -webkit-mask-size: cover;
  mask-size: cover;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;

  background-image: url("/images/backgrounds/space2.jpg");
  background-size: 120% 120%;
  background-attachment: fixed;
  background-position: center;

  transition: 3s ease-in;

  .skills {
    &__title {
      position: absolute;
      color: var(--green);
      font-family: "Concert One", sans-serif;
      font-size: 40px;
      line-height: 26px;
      margin-left: 12px;
      text-shadow: 0 0 10px #000;

      @media (min-width: 500px) {
        font-size: 48px;
        line-height: 34px;
      }

      @media (min-width: 800px) {
        font-size: 54px;
        line-height: 41px;
        margin-left: 20px;
      }
    }
  }
`;

export const Universe = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  transition: 3s ease-in;

  @media (min-width: 800px) {
    height: 120vh;
    min-height: 720px;
  }
`;

export const Orbit = styled.div`
  position: absolute;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;

  animation: orbitsRotation ${(props) => props.speed}s infinite linear;
  transition: 3s ease-in;

  @keyframes orbitsRotation {
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

  /* animation: iconsRotation ${(props) => props.speed}s infinite linear;

  @keyframes iconsRotation {
    100% {
      transform: rotate(-360deg);
    }
  } */
`;
