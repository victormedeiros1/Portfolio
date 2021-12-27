import styled from "styled-components";

export const WorksStyles = styled.section`
  .works {
    &--row {
      display: flex;
      flex-direction: row;

      &--item {
        height: 50px;

        &__size-1 {
          flex: 1;
          border: 1px solid red;
        }
        &__size-2 {
          flex: 2;
          border: 1px solid blue;
        }
      }
    }
  }
`;
