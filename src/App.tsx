import Router from './routes/Router';
import { GlobalStyle } from './styles/globalStyle';
import {ReactQueryDevtools} from "react-query/devtools";
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './styles/theme';
import { useState } from 'react';

const App = () => {

  // 테마 관리
  const [isDark, setIsDark] = useState(false);

  const handleTheme = () => {
    setIsDark((curTheme) => !curTheme);
  }

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Router handleTheme={handleTheme} isDark={isDark}/>
        {/* <ReactQueryDevtools initialIsOpen={true} /> */}
      </ThemeProvider>
    </>
  )
}

export default App