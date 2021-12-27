import styled from "styled-components";

export const WorksStyles = styled.section`
  .works {
    &--row {
      display: flex;
      flex-direction: row;

      &--item {
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        border-radius: 25px;

        &--omega {
          background-color: var(--rose);

          &--image {
            float: right;
          }
        }
        &--netflix {
          background-color: var(--blue);

          &--image {
            float: right;
          }
        }
        &--spotify {
          background-color: var(--yellow);

          &--image {
            float: left;
          }
        }
        &--other {
          background-color: var(--green);
        }
        &__size-1 {
          flex: 1;
        }
        &__size-2 {
          flex: 2;
        }
      }
    }
  }
`;
