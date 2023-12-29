import styled from "styled-components";

export const PriceBox = styled.div`
    margin-top : 2rem;
`

export const PriceLoading = styled.p`
    text-align : center;
`

export const MaxPriceBox = styled.div`
    display : flex;
    justify-content : space-between;
    align-items : center;
    background-color : rgba(0, 0, 0, 0.7);
    padding: 1.5rem 2rem;
    border-radius : 1rem;
`

export const MaxPriceItem = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    p {
        &:last-child {
            margin-top : 0.5rem;
        }
    }
`

export const MaxPriceData = styled.p`
    font-size : 2rem;
`


// 1, 6, 12, 24, 7d, 30d
export const PercentChgBox = styled.div`
    display : grid;
    grid-template-columns : repeat(2, 1fr);
    gap : 1rem;
    margin-top : 2rem;
    margin-bottom : 2rem;
`

export const PercentChgItem = styled.div`
    background-color : rgba(0, 0, 0, 0.7);
    padding: 1.5rem 2rem;
    border-radius : 1rem;
    p {
        &:last-child {
            margin-top : 0.5rem;
            font-size : 2rem;
        }
    }
`

export const DecUnit = styled.p`
    color : green;
`

export const IncUnit = styled.p`
    color : red;
`