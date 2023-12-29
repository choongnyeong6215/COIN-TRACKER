import { useParams, useLocation, Outlet, Link, useMatch, useNavigate } from 'react-router-dom';
import { Container, Header, Loading, Title } from '../styles/homeStyle'
import { DetailInfoBox, DetailInfoItem, CoinDescription, InfoTabBox, InfoTabItem, PriceInfoBox, PriceInfoItem, HomeBtn } from '../styles/CoinInfoStyle';
import { CoinParamsItfc, LinkStateItfc, CoinInfoItfc, CoinPriceInfoItfc } from '../interface/CoinInterface';
import { useQuery } from 'react-query';
import { fetchCoinInfo, fetchCoinPriceInfo } from '../api';
import { Helmet } from 'react-helmet';

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
  const {isLoading : coinPriceInfoLoading, data : coinPriceInfo} = useQuery<CoinPriceInfoItfc>(
    ["coinPriceInfo", coinId],
    () => fetchCoinPriceInfo(coinId),
    {
      // query 5분 단위로 refetch
      refetchInterval : 300000
    }
  );

  // 두 쿼리 중 하나라도 로딩 완료되면 fetch 완료 처리
  const loading = coinInfoLoading || coinPriceInfoLoading;

  const navigate = useNavigate();

  const handleHomeBtn = () => {
    navigate("/");
  };

  return (
    <Container>
      <Helmet>
        <title>{state?.coinName ? state.coinName : coinInfo?.name}</title>
      </Helmet>
      <Header>
        <Title>
          {/* 홈 경로에서 세부 정보로 이동하지 않고 바로 세부정부로 이동해도 정보 볼수 있도록 */}
          {state?.coinName ? state.coinName : coinInfo?.name}
        </Title>
      </Header>
      {loading ? <Loading>Loading...</Loading> : (
      <>
          {/* 홈 이동 버튼 */}
          <HomeBtn onClick={handleHomeBtn}>
            홈
          </HomeBtn>

          {/*  코인 기본 정보 */}
          <DetailInfoBox>
            <DetailInfoItem>
              <p>기호</p>
              <p>{coinInfo?.symbol}</p>
            </DetailInfoItem>
            <DetailInfoItem>
              <p>가격</p>
              <p>{`$${coinPriceInfo?.quotes.USD.price.toFixed(5)}`}</p>
            </DetailInfoItem>
            <DetailInfoItem>
              <p>순위</p>
              <p>{coinInfo?.rank}</p>
            </DetailInfoItem>
          </DetailInfoBox>
          
          {/* 코인 가격 정보 */}
          <PriceInfoBox>
            <PriceInfoItem>
              <p>총 공급량</p>
              <p>{coinPriceInfo?.total_supply}</p>
            </PriceInfoItem>
            <PriceInfoItem>
              <p>최대 공급량</p>
              <p>{coinPriceInfo?.max_supply}</p>
            </PriceInfoItem>
          </PriceInfoBox>

          {/* 코인 설명 */}
          <CoinDescription>
            <p>{coinInfo?.description ? coinInfo.description : "설명 데이터가 존재하지 않습니다."}</p>
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
