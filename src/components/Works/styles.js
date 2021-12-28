import styled from "styled-components";

export const WorksStyles = styled.section`
  .works {
    &--row {
      display: flex;
      flex-direction: row;

      &--item {
        position: relative;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        border-radius: 25px;

        &--header {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          margin-left: 30px;

          &--title {
            color: var(--white);
            font-weight: 700;
            font-size: 24px;
            line-height: 36px;
          }
          &--subtitle {
            color: var(--white);
            font-size: 20px;
            line-height: 28px;
            font-weight: 300;
          }
        }
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
          display: flex;
          justify-content: center;
          align-items: center;

          &--content {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            margin-left: -20px;

            p {
              font-weight: 300;
              margin-top: 20px;
            }
          }
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
