import { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom';
import { Container, Header, Loading, Title } from '../styles/homeStyle'

// link state 인터페이스
interface LinkStateItfc {
  state : {
    coinName : string;
  }
}

// 코인 정보 인터페이스
interface coinInfoItfc {
  id : string;
  name : string;  
  symbol : string;  
  rank : number;
  is_new : boolean;  
  is_active : boolean;  
  type : string;
  logo : string;
  description : string;
  message : string;
  open_source : boolean;
  started_at : string;
  development_status : string;
  hardware_wallet : boolean;
  proof_type : string;
  org_structure : string;
  hash_algorithm : string;
  first_data_at : string;
  last_data_at : string;
}

// 코인 가격 정보 인터페이스
interface coinPriceInfoItfc {
  id : string;
  name : string;
  symbol : string;
  rank : number;
  circulating_supply : number;
  total_supply : number;
  max_supply : number;
  beta_value : number;
  first_data_at : string;
  last_updated : string;
  quotes : {
    USD : {
      ath_date : string;
      ath_price : number;
      market_cap : number;
      market_cap_change_24h : number;
      percent_change_1h : number;
      percent_change_1y : number;
      percent_change_6h : number;
      percent_change_7d : number;
      percent_change_12h : number;
      percent_change_15m : number;
      percent_change_24h : number;
      percent_change_30d : number;
      percent_change_30m : number;
      percent_from_price_ath : number;
      price : number;
      volume_24h : number;
      volume_24h_change_24h : number;
    }
  }
}

const Coin = () => {

  const {coinId} = useParams();
  
  // 코인 정보
  const [coinInfo, setCoinInfo] = useState<coinInfoItfc>();
  // 코인 가격 정보
  const [coinPriceInfo, setCoinPriceInfo] = useState<coinPriceInfoItfc>();
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
