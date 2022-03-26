import styled from "styled-components";

export const AboutMeStyles = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (min-width: 800px) {
    height: 100vh;
    min-height: 720px;
  }

  .about-me {
    &__texts {
      @media (min-width: 800px) {
        flex: 1;
        margin-bottom: 100px;
      }

      &__title {
        color: var(--dark);
        font-size: 18px;
        line-height: 24px;
        font-weight: bold;
        margin-bottom: 24px;

        @media (min-width: 800px) {
          font-size: 24px;
          line-height: 36px;
        }
      }
      &__paragraph {
        color: var(--dark);
        font-size: 12px;
        line-height: 18px;
        font-weight: 400;
        margin-bottom: 24px;

        @media (min-width: 800px) {
          max-width: 580px;
          font-size: 14px;
          line-height: 18px;
        }
      }
    }
    &__profile-picture {
      text-align: center;
      flex: 1;

      &__desktop {
        text-align: center;
        flex: 1;

        &__photo {
          display: none;

          @media (min-width: 800px) {
            display: initial;
          }
        }
      }

      &__mobile {
        text-align: center;
        flex: 1;

        &__photo {
          display: initial;
          width: 300px;
          height: 400px;

          @media (min-width: 800px) {
            display: none;
          }
        }
      }
    }
  }
`;
