import styled from "styled-components";

export const ContactStyles = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (min-width: 800px) {
    justify-content: center;
    height: 100vh;
    min-height: 720px;
  }

  .contact {
    &--left {
      border-right: none;

      @media (min-width: 800px) {
        margin-right: 100px;
        padding-right: 50px;
        border-right: 1px solid var(--lightgray);
      }

      &--medias {
        &--list {
          list-style: none;

          &--item {
            &--link {
              color: var(--dark);
              font-family: "Poppins", sans-serif;
              font-weight: 700;
              font-size: 25px;

              @media (min-width: 800px) {
                font-size: 40px;
              }

              &:hover {
                color: var(--green);
              }

              &--icon {
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
    &--right {
      @media (max-width: 800px) {
        display: none;
      }
    }
  }
`;
