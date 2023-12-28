import { useOutletContext } from "react-router-dom";
import { ChartPropsItfc, CoinHistroyItfc } from "../interface/ChartInterface";
import { fetchCoinHistory } from "../api";
import {useQuery} from "react-query";
import ApexChart from "react-apexcharts";
import { ChartBox, ChartLoading } from "../styles/ChartStyle";

const Chart = () => {

  const {coinId} = useOutletContext() as ChartPropsItfc;

  // react-query
  const {isLoading, data} = useQuery<CoinHistroyItfc[]>(["coinHistory", coinId], () => fetchCoinHistory(coinId));


  return (
    <ChartBox>
      {isLoading ? (
        <ChartLoading>Chart is Loading...</ChartLoading>
      ) : (
        <ApexChart
          type="candlestick"
          // 차트에 보여줄 데이터
          series={[
            {
              name : "ohlc",
              data : data?.map((price) => ({
                x : String(new Date(price.time_close * 1000)).substring(4, 10),
                y : [price.open, price.high, price.close, price.low]
              })).slice(13, 20) as any[]
            }
          ]}
          // 차트 스타일 커스텀
          options={{
            theme : {
              mode : "dark"
            },
            chart : {
              width : 500,
              height : 500,
              background : "transparent",
              toolbar : {
                show : false
              }
            },
            yaxis : {
              show : false
            },
            xaxis : {
              categories : data?.map((price) => price.time_close)
            },
            // 캔들 심지 색상
            plotOptions: {
              candlestick: {
                colors: {
                  upward: "#3C90EB",
                  downward: "#DF7D46"
                }
              }
            }
          }}
        />
      )}
    </ChartBox>
  )
}

export default Chart