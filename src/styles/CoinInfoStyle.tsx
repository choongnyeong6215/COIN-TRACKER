import styled from "styled-components";

export const DetailInfoBox = styled.div`
    display : flex;
    justify-content : space-between;
    align-items : flex-start;
    background-color : rgba(0, 0, 0, 0.7) ;
    padding: 1.5rem 2rem;
    border-radius: 1rem;
    margin-bottom: 2rem;
`;

export const DetailInfoItem = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    p {
        &:first-child {
            font-weight : bold;
            font-size : 1.25rem;
        }
        &:last-child {
            font-size : 1rem;
            margin-top : 1rem;
        }
    }
`;

export const CoinDescription = styled.div`
    margin-top : 2rem;
    p {
        text-align: center;
        line-height: 2rem;
    }
`