import styled from "styled-components";

export const ContactStyles = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 40px;

  @media (min-width: 800px) {
    justify-content: center;
    height: 100vh;
    min-height: 720px;
    margin-left: 0;
  }

  .contact {
    &__left {
      border-right: none;

      @media (min-width: 800px) {
        margin-right: 100px;
        padding-right: 50px;
        border-right: 1px solid var(--lightgray);
      }

      &__medias {
        &__list {
          list-style: none;

          &__item {
            &__link {
              display: flex;
              flex-direction: row;
              align-items: center;
              color: var(--dark);
              font-family: "Poppins", sans-serif;
              font-weight: 700;
              font-size: 25px;

              @media (min-width: 800px) {
                font-size: 40px;
              }

              &:hover {
                color: var(--green);

                .contact__left__medias__list__item__link__icon {
                  fill: var(--green);
                }
              }
              &__icon {
                fill: var(--dark);
                width: 15px;
                height: 15px;
                margin-right: 10px;

                @media (min-width: 800px) {
                  width: 30px;
                  height: 30px;
                  margin-right: 20px;
                }
              }
            }
          }
        }
      }
    }
    &__right {
      @media (max-width: 800px) {
        display: none;
      }
    }
  }
`;
