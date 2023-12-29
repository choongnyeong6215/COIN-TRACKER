import { Container, Header, Title, CoinsList, Coin, Loading, CoinImg } from "../styles/homeStyle"
import { Link } from "react-router-dom";
import { CoinItfc } from "../interface/HomeInterface";
import { useQuery } from "react-query";
import { fetchCoinList } from "../api";
import { Helmet } from "react-helmet";

const Home = () => {
  // react query
  const {isLoading, data} = useQuery<CoinItfc[]>("coinList", fetchCoinList);

  const coinList = data?.slice(0, 100);
  
  return (
    <div>
      <Container>
        <Helmet>
          <title>Coin Tracker</title>
        </Helmet>
        <Header>
          <Title>Coin Tracker</Title>
        </Header>
        {isLoading ? <Loading>Loading...</Loading> : (
          <CoinsList>
            {coinList?.map((coin) => (
              <Coin key={coin.id}>
                  <CoinImg src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`} alt="coinImage" />
                   <Link to={`/${coin.id}`} state={{coinName : coin.name}}>
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
