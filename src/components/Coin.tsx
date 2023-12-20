import { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom';
import { Container, Header, Loading, Title } from '../styles/homeStyle'
import { LinkStateItfc, CoinInfoItfc, CoinPriceInfoItfc } from '../interface/CoinInterface';

const Coin = () => {

  const {coinId} = useParams();
  
  // 코인 정보
  const [coinInfo, setCoinInfo] = useState<CoinInfoItfc>();
  // 코인 가격 정보
  const [coinPriceInfo, setCoinPriceInfo] = useState<CoinPriceInfoItfc>();
  // 로딩 관리
  const [loading, setLoading] = useState(true);

  // link state
  const {state} = useLocation() as LinkStateItfc;

  useEffect(() => {
    async function fetchData() {
      // 코인 정보
      const infoResponse = await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`);
      const infoData = await infoResponse.json();

      // 가격 정보
      const priceResponse = await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`);
      const priceData = await priceResponse.json();

      setCoinInfo(infoData);
      setCoinPriceInfo(priceData);
    }
    fetchData();
  }, []);


  return (
    <Container>
      <Header>
        <Title>
          {/* state 못받은 상태에서 접속할 경우 */}
          {state?.coinName || ""}
        </Title>
      </Header>
      <Loading>loading...</Loading>
    </Container>
  )
}

export default Coin
