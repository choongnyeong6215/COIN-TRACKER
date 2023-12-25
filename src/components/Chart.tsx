import { useOutletContext } from "react-router-dom";
import { ChartPropsItfc, CoinHistroyItfc } from "../interface/ChartInterface";
import { fetchCoinHistory } from "../api";
import {useQuery} from "react-query";
import ApexChart from "react-apexcharts";
import { ChartBox } from "../styles/ChartStyle";

const Chart = () => {

  const {coinId} = useOutletContext() as ChartPropsItfc;

  // react-query
  const {isLoading, data} = useQuery<CoinHistroyItfc[]>(["coinHistory", coinId], () => fetchCoinHistory(coinId));

  return (
    <ChartBox>
      {isLoading ? (
        <p>Chart is Loading...</p>
      ) : (
        <ApexChart 
          type="line"
          // 차트 데이터
          series={[
            {
              name : "최저가",
              data : data?.map((price) => price.low).slice(0, 14) ?? []
            },
            {
              name : "최고가",
              data : data?.map((price) => price.high).slice(0, 14) ?? []
            },
          ]}
          // 차트 스타일
          options={{
            theme : {
              mode : "dark"
            },
            chart : {
              width : 500,
              height : 500,
              toolbar : {
                show : false
              }
          },
          stroke : {
            curve : "smooth",
            width : 5
          }
        }}
        />
      )}
    </ChartBox>
  )
}

export default Chart