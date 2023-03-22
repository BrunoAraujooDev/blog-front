import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Home } from "./pages/Home/home";
import { DefaultTheme } from "./styles/theme/default";


function App() {

  return (
    <ThemeProvider theme={DefaultTheme}>
      {/* <BrowserRouter>

      
      </BrowserRouter> */}

      <Home/>
      

    </ThemeProvider>
  )
}

export default App;
