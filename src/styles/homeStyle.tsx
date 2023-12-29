import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    max-width: 500px;
    margin: 0rem auto;
`;

export const Header = styled.header`
    display : flex;
    justify-content : center;
    align-items : center;
    height : 20vh;
`;

export const Title = styled.h1`
font-size : 3rem;
`;

export const CoinsList = styled.ul`
    display : grid;
    grid-template-columns : repeat(4, 1fr);
    gap : 1rem;
`;

export const Coin = styled.li`
    width: 120px;
    height: 120px;
    border-radius : 1rem;
    background-color : white;
    display : flex;
    flex-direction: column;
    justify-content : center;
    align-items : center;
    a {
        color : black;
        text-align : center;
        margin-top: 1rem;
        font-size: 0.75rem;
        &:hover {
            cursor : pointer;
            color : ${(props) => props.theme.empTxtColor}
        }
    }
`;

export const CoinImg = styled.img`
    width: 50px;
    height: 50px;
`;

export const LoadingAnimation = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`;

export const Loading = styled.h1`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 5rem;
    animation: ${LoadingAnimation} 2s linear infinite;
`;

export const ChgThemeBtn = styled.button`
    width : 50px;
    height : 50px;
    border-radius : 50%;
    border : none;
    position : absolute;
    top : 1rem;
    right : 1rem;
`