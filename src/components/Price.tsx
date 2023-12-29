import { useOutletContext } from "react-router-dom"
import { CoinParamsItfc, CoinPriceInfoItfc } from "../interface/CoinInterface";
import { useQuery } from "react-query";
import { fetchCoinPriceInfo } from "../api";
import { MaxPriceBox, MaxPriceItem, MaxPriceData, PriceBox, PriceLoading, PercentChgBox, PercentChgItem, DecUnit,  IncUnit } from "../styles/PriceStyle";

const Price = () => {

  const {coinId} = useOutletContext() as CoinParamsItfc;

  const {isLoading, data} = useQuery<CoinPriceInfoItfc>(["coinPercentChgInfo", coinId], () => fetchCoinPriceInfo(coinId));

  // 최고가 경신 날짜
  const ath_date = new Date(data?.quotes.USD.ath_date as string);
  const ath_date_year = ath_date.getFullYear();
  const ath_date_month = ("0" + ath_date.getMonth()).slice(-2);
  const ath_date_day = ("0" + ath_date.getDay()).slice(-2);
  const ath_date_hours = ("0" + ath_date.getHours()).slice(-2);
  const ath_date_minutes = ("0" + ath_date.getMinutes()).slice(-2);

  return (
    <PriceBox>
      {isLoading ? (
        <PriceLoading>price change data is Loading...</PriceLoading>
      ) : (
        <>
          <MaxPriceBox>
            <MaxPriceItem>
              <p>{`${ath_date_year}.${ath_date_month}.${ath_date_day} ${ath_date_hours} : ${ath_date_minutes}`}</p>
              <p>최고가 경신</p>
            </MaxPriceItem>
            <MaxPriceItem>
              <MaxPriceData>{`$ ${data?.quotes.USD.ath_price.toFixed(5)}`}</MaxPriceData>   {/* 최고가 데이터 */} 
            </MaxPriceItem>
          </MaxPriceBox>
          <PercentChgBox>
            <PercentChgItem>
              <p>1시간 전 대비</p>
              {/* 현재 가격이 이전 데이터 가겨보다 낮은지 판단 */}
              {Math.sign(data?.quotes.USD.percent_change_1h as number) === -1 ? (
                <DecUnit>{`${data?.quotes.USD.percent_change_1h}`}%</DecUnit>
              ) : (
                <IncUnit>{`+${data?.quotes.USD.percent_change_1h}`}%</IncUnit>
              )}
            </PercentChgItem>
            <PercentChgItem>
              <p>6시간 전 대비</p>
              {Math.sign((data?.quotes.USD.percent_change_6h as number)) === -1 ? (
                <DecUnit>{`${data?.quotes.USD.percent_change_6h}`}%</DecUnit>
              ) : (
                <IncUnit>{`+${data?.quotes.USD.percent_change_6h}`}%</IncUnit>
              )}
            </PercentChgItem>
            <PercentChgItem>
              <p>12시간 전 대비</p>
              {Math.sign((data?.quotes.USD.percent_change_12h as number)) === -1 ? (
                <DecUnit>{`${data?.quotes.USD.percent_change_12h}`}%</DecUnit>
              ) : (
                <IncUnit>{`+${data?.quotes.USD.percent_change_12h}`}%</IncUnit>
              )}
            </PercentChgItem>
            <PercentChgItem>
              <p>24시간 전 대비</p>
              {Math.sign((data?.quotes.USD.percent_change_24h as number)) === -1 ? (
                <DecUnit>{`${data?.quotes.USD.percent_change_24h}`}%</DecUnit>
              ) : (
                <IncUnit>{`+${data?.quotes.USD.percent_change_24h}`}%</IncUnit>
              )}
            </PercentChgItem>
            <PercentChgItem>
              <p>7일 전 대비</p>
              {Math.sign((data?.quotes.USD.percent_change_7d as number)) === -1 ? (
                <DecUnit>{`${data?.quotes.USD.percent_change_7d}`}%</DecUnit>
              ) : (
                <IncUnit>{`+${data?.quotes.USD.percent_change_7d}`}%</IncUnit>
              )}
            </PercentChgItem>
            <PercentChgItem>
              <p>30일 전 대비</p>
              {Math.sign((data?.quotes.USD.percent_change_30d as number)) === -1 ? (
                <DecUnit>{`${data?.quotes.USD.percent_change_30d}`}%</DecUnit>
              ) : (
                <IncUnit>{`+${data?.quotes.USD.percent_change_30d}`}%</IncUnit>
              )}
            </PercentChgItem>
          </PercentChgBox>
        </>
      )}
    </PriceBox>
  )
}

export default Price