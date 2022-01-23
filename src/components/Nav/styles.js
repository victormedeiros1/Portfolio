import styled from "styled-components";

export const NavStyles = styled.nav`
  position: fixed;
  width: 100px;
  top: 20px;
  right: 0;
  margin-right: 20px;
  z-index: 9999;

  @media (min-width: 800px) {
    top: 50px;
  }

  .navbar {
    &--list {
      text-align: end;

      &--bars {
        transform: scaleX(-1);

        line {
          stroke: var(--dark);
        }
      }
      &--item {
        color: var(--dark);
        list-style: none;

        &--link {
          color: var(--dark);
          font-size: 12px;
          line-height: 14px;
          font-weight: 700;
          transition: 0.3s;

          &:hover {
            color: var(--green);
          }

          &--dark {
            cursor: pointer;
          }
        }
      }
    }
  }
`;
