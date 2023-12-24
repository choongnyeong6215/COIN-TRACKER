import Router from './routes/Router';
import { GlobalStyle } from './styles/globalStyle';
import {ReactQueryDevtools} from "react-query/devtools";


const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  )
}

export default App
