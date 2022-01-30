import styled from "styled-components";

export const MainStyles = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 1080px;
  min-height: 500px;
  height: 100vh;

  .main {
    &--header {
      display: flex;
      flex-direction: column-reverse;

      @media (min-width: 800px) {
        flex-direction: row;
      }

      &--left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;

        @media (min-width: 800px) {
          align-items: end;
          text-align: end;
          border-right: 1px solid var(--lightgray);
          padding-right: 50px;
          margin-right: 100px;
        }

        &--h1 {
          width: 200px;
          font-size: 60px;
          line-height: 60px;
          color: var(--dark);
          font-family: "Concert One", sans-serif;
          margin: 30px 0 20px 0;

          @media (min-width: 800px) {
            font-size: 100px;
            line-height: 100px;
            margin: 0 0 20px 0;
            width: 300px;
          }
        }
        &--h2 {
          /* width: 250px; */
          color: var(--green);
          font-family: "Concert One", sans-serif;
          margin-bottom: 50px;
          font-size: 30px;
          line-height: 30px;
          letter-spacing: 1px;
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

          &:hover {
            background-color: var(--dark);
            color: var(--white);
            /* transition: 0.3s; */
          }
        }
      }
      &--right {
        @media (max-width: 800px) {
          display: flex;
          justify-content: center;
        }
      }
    }
  }
`;
