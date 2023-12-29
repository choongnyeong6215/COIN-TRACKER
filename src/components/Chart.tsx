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
        Array.isArray(data) ? (
        <ApexChart
          type="candlestick"
          // 차트에 보여줄 데이터
          series={[
            {
              name : "ohlc",
              data : data?.map((price) => ({
                x : new Date(price.time_close * 1000),
                y : [price.open, price.high, price.low, price.close]
              })) as []
            }
          ]}
          // 차트 스타일 커스텀
          options={{
            theme : {
              mode : "dark"
            },
            chart : {
              width : 500,
              height : 350,
              background : "transparent",
              toolbar : {
                show : false
              }
            },
            yaxis : {
              show : false
            },
            xaxis : {
              type : "datetime",
              categories : data?.map((price) => price.time_close),
              labels : {
                show : false,
                datetimeFormatter : {
                  month : "mmm yy"
                }
              },
              axisBorder : {
                show : false
              },
              axisTicks : {
                show : false
              }
            },
            grid : {
              xaxis : {
                lines : {
                  show : false
                },
              },
              yaxis : {
                lines : {
                  show : false
                }
              }
            },
            plotOptions: {
              candlestick: {
                wick: {
                  useFillColor: true,
                }
              }
            }          
          }}
        />) : (
          <p style={{textAlign : "center"}}>차트 데이터가 존재하지 않습니다.</p>
        )
      )}
    </ChartBox>
  )
}

export default Chart