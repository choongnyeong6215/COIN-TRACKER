import { useParams } from "react-router-dom";

const Coin = () => {
    const {coinId} = useParams();
    
  return (
    <div>
        <h1>{coinId}</h1>
    </div>
  )
}

export default Coin