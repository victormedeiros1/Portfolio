import styled from "styled-components";

export const WorksStyles = styled.section`
  margin-top: 0;

  .works {
    &--row {
      display: flex;
      flex-direction: column;

      @media (min-width: 800px) {
        flex-direction: row;
      }

      &--item {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        border-radius: 25px;
        min-height: 200px;
        overflow: hidden;

        @media (min-width: 800px) {
          min-height: 325px;
        }

        &--title {
          color: var(--white);
          font-weight: 700;
          font-size: 18px;
          line-height: 30px;
          margin-left: 30px;
          z-index: 1;

          @media (min-width: 800px) {
            font-size: 24px;
            line-height: 36px;
          }
        }
        &--subtitle {
          color: var(--white);
          font-size: 14px;
          line-height: 24px;
          font-weight: 300;
          margin-left: 30px;
          z-index: 1;

          @media (min-width: 800px) {
            font-size: 20px;
            line-height: 28px;
          }
        }
        &--image {
          position: absolute;
          right: 0;
          bottom: 0;
          height: 80%;

          @media (min-width: 800px) {
            right: 0;
          }
        }
        &__rose {
          background-color: var(--rose);
        }
        &__blue {
          background-color: var(--blue);
        }
        &__yellow {
          background-color: var(--yellow);
        }

        /* Coming Soon */
        &__green {
          background-color: var(--green);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        &--logo {
          width: 100px;
          margin-bottom: 20px;
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
