import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../components/Home"
import Coin from "../components/Coin"

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:coinId" element={<Coin />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router
