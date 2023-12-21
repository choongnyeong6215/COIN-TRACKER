import { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom';
import { Container, Header, Loading, Title } from '../styles/homeStyle'
import { DetailInfoBox, DetailInfoItem, CoinDescription } from '../styles/CoinInfoStyle';
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

    setLoading(false);
  }, []);

  return (
    <Container>
      <Header>
        <Title>
          {/* 홈 경로에서 세부 정보로 이동하지 않고 바로 세부정부로 이동해도 정보 볼수 있도록 */}
          {state?.coinName ? state.coinName : coinInfo?.name}
        </Title>
      </Header>
      {loading ? <Loading>Loading...</Loading> : (
      <>
          {/*  코인 기본 정보 */}
          <DetailInfoBox>
            <DetailInfoItem>
              <p>이름</p>
              <p>{coinInfo?.name}</p>
            </DetailInfoItem>
            <DetailInfoItem>
              <p>기호</p>
              <p>{coinInfo?.symbol}</p>
            </DetailInfoItem>
            <DetailInfoItem>
              <p>순위</p>
              <p>{coinInfo?.rank}</p>
            </DetailInfoItem>
          </DetailInfoBox>
          {/* 코인 가격 정보 */}
          <DetailInfoBox>
            <DetailInfoItem>
              <p>가격</p>
              <p>{`$${coinPriceInfo?.quotes.USD.price.toFixed(2)}`}</p>
            </DetailInfoItem>
            <DetailInfoItem>
              <p>최초 발행일</p>
              <p>{coinPriceInfo?.first_data_at.substring(0, 10)}</p>
            </DetailInfoItem>
            <DetailInfoItem>
              <p>공급량</p>
              <p>{coinPriceInfo?.total_supply}</p>
            </DetailInfoItem>
          </DetailInfoBox>
          {/* 코인 설명 */}
          <CoinDescription>
            <p>{coinInfo?.description}</p>
          </CoinDescription>
      </>    
      )}
    </Container>
  )
}

export default Coin
