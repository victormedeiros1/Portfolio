import styled from "styled-components";

export const LanguagesMenuStyles = styled.div`
  position: fixed;
  top: 15px;
  left: 20px;
  z-index: 9999;

  .languages {
    &--list {
      list-style: none;

      @media (min-width: 800px) {
        display: flex;
      }

      &--item {
        margin-right: 10px;

        &--button {
          background: none;
          border: none;
          transition: 0.2s;
          cursor: pointer;

          &:hover {
            transform: scale(1.2);
          }

          &--image {
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
          }
        }
      }
    }
  }
`;
