import styled from "styled-components";

export const ContactStyles = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;

  .contact {
    &--left {
      margin-right: 100px;
      padding-right: 50px;
      border-right: 1px solid var(--lightgray);
      &--medias {
        &--list {
          list-style: none;

          &--item {
            &--link {
              color: var(--dark);
              font-family: "Poppins", sans-serif;
              font-weight: 700;
              font-size: 40px;

              &:hover {
                color: var(--green);
              }

              &--icon {
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
`;
