import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { DefaultTheme } from "./styles/theme/default";
import { Router } from "./Router"


function App() {

  return (
    <ThemeProvider theme={DefaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default App;
