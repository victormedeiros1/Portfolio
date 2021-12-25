import styled from "styled-components";

export const NavStyles = styled.nav`
  position: fixed;
  width: 100%;
  max-width: 1200px;

  .navbar {
    &--list {
      margin-top: 50px;
      text-align: end;

      &--bars {
        transform: scaleX(-1);
      }
      &--item {
        list-style: none;

        &--link {
          color: var(--dark);
          font-size: 12px;
          line-height: 14px;
          font-weight: 700;

          &:hover {
            color: var(--green);
          }
        }
      }
    }
  }
`;
