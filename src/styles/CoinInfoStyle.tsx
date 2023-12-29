import styled from "styled-components";

export const HomeBtn = styled.button`
    display : flex;
    justify-content : flex-start;
    align-items : center;
    padding : 1rem 2rem;
    border : none;
    background-color : ${(props) => props.theme.empTxtColor};
    border-radius : 1rem;
    color : ${(props) => props.theme.textColor};
    margin-bottom : 0.5rem;
    cursor : pointer;
`

export const DetailInfoBox = styled.div`
    display : flex;
    justify-content : space-between;
    align-items : flex-start;
    background-color : rgba(0, 0, 0, 0.7);
    padding: 1.5rem 2rem;
    border-radius : 1rem;
    margin-bottom : 2rem;
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

export const PriceInfoBox = styled.div`
    display : flex;
    justify-content : space-around;
    align-items : flex-start;
    background-color : rgba(0, 0, 0, 0.7);
    padding: 1.5rem 2rem;
    border-radius : 1rem;
    margin-bottom : 2rem;
`;

export const PriceInfoItem = styled.div`
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
    background-color : rgba(0, 0, 0, 0.7);
    padding: 1.5rem 2rem;
    border-radius : 1rem;
    p {
        text-align: center;
        line-height: 2rem;
    }
`

export const InfoTabBox = styled.div`
    display : grid;
    grid-template-columns : repeat(2, 1fr);
    gap : 1rem;
`

export const InfoTabItem = styled.div<{$isMatchedPath : boolean}>`
    display : flex;
    justify-content : center;
    align-items : center;
    padding : 1rem 5rem;
    background-color : rgba(0, 0, 0, 0.7);
    border-radius : 1rem;
    margin-top : 2rem;
    // 중첩 라우팅 요소 중 현재 경로의 요소만 강조색상
    color : ${(props) => props.$isMatchedPath ? props.theme.empTxtColor : props.theme.textColor};
`