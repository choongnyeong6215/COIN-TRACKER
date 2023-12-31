// home 화면 코인 리스트 fetch
export function fetchCoinList() {
    return (
        fetch("https://api.coinpaprika.com/v1/coins")
        .then((response) => response.json())
    )
}

// 코인 정보 fetch
export function fetchCoinInfo(coinId : string) {
    return (
        fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
        .then((response) => response.json())
    )
}

// 코인 가격 정보 fetch
export function fetchCoinPriceInfo(coinId : string) {
    return (
        fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
        .then((response) => response.json())
    )
}

// 차트 화면 코인 histtory fetch
export function fetchCoinHistory(coinId : string) {
    return (
        // 노마드코더 자체 api 사용
        fetch(`https://ohlcv-api.nomadcoders.workers.dev/?coinId=${coinId}`)
        .then((response) => response.json())
    )
}