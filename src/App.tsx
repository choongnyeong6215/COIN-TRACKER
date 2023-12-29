import Router from './routes/Router';
import { GlobalStyle } from './styles/globalStyle';
import {ReactQueryDevtools} from "react-query/devtools";
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './styles/theme';

const App = () => {

  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <Router />
        {/* <ReactQueryDevtools initialIsOpen={true} /> */}
      </ThemeProvider>
    </>
  )
}

export default App