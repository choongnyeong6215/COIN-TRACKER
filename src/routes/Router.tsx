import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../components/Home";
import Coin from "../components/Coin";
import Price from "../components/Price"
import Chart from '../components/Chart';

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home /> } />
            <Route path="/:coinId/*" element={<Coin/> } >
              {/* 중첩 라우팅  */}
              <Route path="price" element={<Price /> } />
              <Route path="chart" element={<Chart /> } />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router
