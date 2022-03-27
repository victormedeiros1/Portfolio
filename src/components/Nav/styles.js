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
    &__list {
      text-align: end;

      &__bars {
        transform: scaleX(-1);

        line {
          stroke: var(--dark);
        }
      }
      &__item {
        list-style: none;

        &__link {
          color: var(--dark);
          font-size: 12px;
          line-height: 14px;
          font-weight: 600;
          transition: 0.3s;

          &:hover {
            color: var(--green);
          }

          &__theme {
            cursor: pointer;
          }
        }
      }
    }
  }
`;
