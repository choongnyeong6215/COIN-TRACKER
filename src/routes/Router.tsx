import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../components/Home";
import Coin from "../components/Coin";
import Price from "../components/Price"
import Chart from '../components/Chart';
import { RouterPropsItfc } from "../interface/RouterInterface";

const Router = ({handleTheme, isDark} : RouterPropsItfc) => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home handleTheme={handleTheme} isDark={isDark}/> } />
            <Route path="/:coinId/*" element={<Coin handleTheme={handleTheme} isDark={isDark}/> } >
              {/* 중첩 라우팅  */}
              <Route path="price" element={<Price /> } />
              <Route path="chart" element={<Chart /> } />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router
