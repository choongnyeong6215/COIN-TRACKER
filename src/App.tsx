import Router from './routes/Router';
import { GlobalStyle } from './styles/globalStyle';
import {ReactQueryDevtools} from "react-query/devtools";
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './styles/theme';
import { useRecoilValue } from 'recoil';
import { isDarkAtom } from './atoms';

const App = () => {

  // 테마 recoil
  const isDark = useRecoilValue(isDarkAtom);

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Router/>
        {/* <ReactQueryDevtools initialIsOpen={true} /> */}
      </ThemeProvider>
    </>
  )
}

export default App