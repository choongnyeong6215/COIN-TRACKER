import { Container, Header, Title, CoinsList, Coin, Loading, CoinImg } from "../styles/homeStyle"
import { Link } from "react-router-dom";
import { CoinItfc } from "../interface/HomeInterface";
import { useQuery } from "react-query";
import { fetchCoinList } from "../api";
import { Helmet } from "react-helmet";
import {ChgThemeBtn} from '../styles/homeStyle';
// react-icons
import { FaMoon } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";
// recoil
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isDarkAtom } from "../atoms";


const Home = () => {
  // react query
  const {isLoading, data} = useQuery<CoinItfc[]>("coinList", fetchCoinList);

  const coinList = data?.slice(0, 100);

  // 테마 recoil value 설정
  const isDark = useRecoilValue(isDarkAtom);
  const setTheme = useSetRecoilState(isDarkAtom);

  // 테마 변경 함수
  const handleTheme = () => {
    setTheme((prevState) => !prevState);
  }
  
  return (
    <div>
      <Container>
        <Helmet>
          <title>Coin Tracker</title>
        </Helmet>
        <ChgThemeBtn onClick={handleTheme}>
          {isDark ? (
            <IoSunnySharp size="20" color="#F67280"/>
          ) : (
            <FaMoon size="20" color="#F67280"/>
          )}
        </ChgThemeBtn>
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
