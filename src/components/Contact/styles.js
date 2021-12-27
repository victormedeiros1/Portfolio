import styled from "styled-components";

export const ContactStyles = styled.footer`
  display: flex;
  flex-direction: row;

  .contact {
    &--left {
      flex: 1;

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
    &--right {
      flex: 1;
    }
  }
`;
