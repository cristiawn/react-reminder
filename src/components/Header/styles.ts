import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%; // (vw) viwer port width
    height: 10vh; //viwer port height

    padding: 0 4rem;
    
    background-color: black;

    border-bottom: 3px solid #C69E33;

    > img {
        height: 2.5rem;
    }
`;