import styled from "styled-components";

export const AboutMeStyles = styled.section`
  display: flex;
  flex-direction: row;

  .about-me {
    &--texts {
      flex: 1;

      &--title {
        font-size: 24px;
        line-height: 36px;
        font-weight: bold;
        margin-bottom: 24px;
      }
      &--paragraph {
        max-width: 580px;
        font-size: 14px;
        line-height: 18px;
        font-weight: 400;
        margin-bottom: 24px;
      }
    }
    &--profile-picture {
      text-align: center;
      flex: 1;
    }
  }
`;
