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
    margin-bottom : 1rem;
    cursor : pointer;

    @media only screen and (max-width: 600px) {
        margin-bottom : 1rem;
        margin-left : 43px;
    }
`

export const DetailInfoBox = styled.div`
    display : flex;
    justify-content : space-between;
    align-items : flex-start;
    background-color : ${(props) => props.theme.boxColor};
    padding: 1.5rem 2rem;
    border-radius : 1rem;
    margin-bottom : 2rem;

    @media only screen and (max-width: 600px) {
        width: 80%;
        height: 80%;
        margin : 0rem auto;
    }
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
    background-color : ${(props) => props.theme.boxColor};
    padding: 1.5rem 2rem;
    border-radius : 1rem;
    margin-bottom : 2rem;

    @media only screen and (max-width: 600px) {
        width: 80%;
        height: 80%;
        margin : 2rem auto;
    }
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

    @media only screen and (max-width: 600px) {
        p {
            &:last-child {
                font-size : 0.75rem;
                margin-top : 1rem;
            }
        }
    }
`;

export const CoinDescription = styled.div`
    background-color : ${(props) => props.theme.boxColor};
    padding: 1.5rem 2rem;
    border-radius : 1rem;
    p {
        text-align: center;
        line-height: 2rem;
    }

    @media only screen and (max-width: 600px) {
        width: 80%;
        height: 80%;
        margin : 0 auto;
    }
`

export const InfoTabBox = styled.div`
    display : grid;
    grid-template-columns : repeat(2, 1fr);
    gap : 1rem;

    @media only screen and (max-width: 600px) {
        width: 80%;
        height: 80%;
        margin : 0 auto;
    }
`

export const InfoTabItem = styled.div<{$isMatchedPath : boolean}>`
    display : flex;
    justify-content : center;
    align-items : center;
    padding : 1rem;
    background-color : ${(props) => props.theme.boxColor};
    border-radius : 1rem;
    margin : 2rem 0;
    // 중첩 라우팅 요소 중 현재 경로의 요소만 강조색상
    color : ${(props) => props.$isMatchedPath ? props.theme.empTxtColor : props.theme.textColor};
`