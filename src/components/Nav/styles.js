import styled from "styled-components";

export const NavStyles = styled.nav`
  position: fixed;
  width: 100%;
  top: 50px;
  max-width: 1200px;
  z-index: 9999;

  .navbar {
    &--list {
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
