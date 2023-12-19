import { useEffect, useState } from "react";
import { Container, Header, Title, CoinsList, Coin, Loading, CoinImg } from "../styles/homeStyle"
import { Link } from "react-router-dom";

// api 넘겨받을 데이터 타입 지정
interface CoinItfc {
  id : string;
  name : string;
  symbol : string;
  rank : number;
  is_new : boolean;
  is_active : boolean;
  type : string;
}

const Home = () => {
  // 코인 리스트
  const [coinList, setCoinList] = useState<CoinItfc[]>([]);
  // 로딩 관리
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/coins")
    .then((response) => response.json())
    .then((data) => setCoinList(data.slice(0, 100)))
    setLoading(false);
  }, []);

  console.log(coinList);
  
  return (
    <div>
      <Container>
        <Header>
          <Title>Coin Tracker</Title>
        </Header>
        {loading ? <Loading>Loading...</Loading> : (
          <CoinsList>
            {coinList.map((coin) => (
              <Coin key={coin.id}>
                  <CoinImg src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`} alt="coinImage" />
                  <Link to={`/${coin.id}`}>
                    {coin.name}
                  </Link>
              </Coin>
            ))}
          </CoinsList>
        ) 
      }
      </Container>
    </div>
  )
}

export default Home
