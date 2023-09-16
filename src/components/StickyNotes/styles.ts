import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 100%;

  text-align: center;

  .reminderTitle {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;

    margin: 3rem 0;

    margin-bottom: 60px;

    > h1 {
      color: var(--purple-900);
      font-family: "Roboto";
    }
  }
`;

export const Grid = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  
  align-items: center;

  > div {
    display: grid;

    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 1.5rem;
    grid-column-gap: 2.5rem;

    width: 90%;

    margin-bottom: 5rem;
  }

  > div > div {
    display: flex;
    flex-direction: column;

    align-items: center;

    height: 15rem;

    padding: 1rem;
    gap: 1rem;

    background-color: var(--purple-300);
    border-radius: 0.4rem;

    justify-content: center;

    &:hover {
      background-color: var(--purple-900);
      color: white;
      cursor: pointer;
      h2 {
        color: #B58F19;
      }
    }

    > h2 {
      font-family: "Roboto";
      color: var(--font-black);
    }
    > p {
      font-family: "Roboto";
      width: 90%;

      overflow: auto;
      text-align: center;

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
`;