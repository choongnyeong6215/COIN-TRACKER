import { useParams, useLocation, Outlet, Link, useMatch } from 'react-router-dom';
import { Container, Header, Loading, Title } from '../styles/homeStyle'
import { DetailInfoBox, DetailInfoItem, CoinDescription, InfoTabBox, InfoTabItem } from '../styles/CoinInfoStyle';
import { CoinParamsItfc, LinkStateItfc, CoinInfoItfc, CoinPriceInfoItfc } from '../interface/CoinInterface';
import { useQuery } from 'react-query';
import { fetchCoinInfo, fetchCoinPriceInfo } from '../api';

const Coin = () => {


  const {coinId} = useParams() as CoinParamsItfc;

  // link state
  const {state} = useLocation() as LinkStateItfc;

  // 경로 확인 변수
  const priceRouteMatch = useMatch("/:coinId/price");
  const chartRouteMatch = useMatch("/:coinId/chart");

  // react query
  // 코인 정보
  const {isLoading : coinInfoLoading, data : coinInfo} = useQuery<CoinInfoItfc>(["coinInfo", coinId], () => fetchCoinInfo(coinId));

  // 코인 가격 정보
  const {isLoading : coinPriceInfoLoading, data : coinPriceInfo} = useQuery<CoinPriceInfoItfc>(["coinPriceInfo", coinId], () => fetchCoinPriceInfo(coinId));

  // 두 쿼리 중 하나라도 로딩 완료되면 fetch 완료 처리
  const loading = coinInfoLoading || coinPriceInfoLoading;


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
              <p>{`$${coinPriceInfo?.quotes.USD.price.toFixed(6)}`}</p>
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

      {/* 중첩 라우팅 링크 */}
      <InfoTabBox>
        <InfoTabItem $isMatchedPath={priceRouteMatch !== null}>
          <Link to={`/${coinId}/price`}>
            가격
          </Link>
        </InfoTabItem>
        <InfoTabItem $isMatchedPath={chartRouteMatch !== null}>
          <Link to={`/${coinId}/chart`}>
            차트
          </Link>
        </InfoTabItem>
      </InfoTabBox>

      {/* 가격, 차트 컴포넌트 중첩 라우팅 */}
      <Outlet context={{coinId}}/>

    </Container>
  )
}

export default Coin
