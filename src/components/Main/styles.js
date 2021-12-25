import styled from "styled-components";

export const MainStyles = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 500px;
  height: 100vh;

  .main {
    &--header {
      display: flex;
      flex-direction: row;

      &--left {
        display: flex;
        flex-direction: column;
        align-items: end;
        justify-content: center;
        border-right: 1px solid var(--lightgray);
        text-align: end;
        padding-right: 50px;
        margin-right: 100px;

        &--h1 {
          color: var(--dark);
          font-family: "Concert One", sans-serif;
          margin-bottom: 20px;

          @media screen and (min-width: 800px) {
            font-size: 100px;
            line-height: 100px;
          }
        }
        &--h2 {
          color: var(--green);
          font-family: "Concert One", sans-serif;
          margin-bottom: 50px;
        }
        &--discover {
          color: var(--dark);
          font-family: "Poppins", sans-serif;
          font-weight: 700;
          font-size: 20px;
          line-height: 14px;
          width: 200px;
          height: 50px;
          border: 1px solid var(--dark);
          border-bottom-left-radius: 90px;
          padding: 17px 40px 18px 57px;
        }
      }

      &--right {
      }
    }
  }
`;
