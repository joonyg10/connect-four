// [components]
import { Board } from "./components/Board";

// @@ [styles]
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/globalStyle";
import { theme } from "./styles/theme";

// @@ App
function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Board />
      </ThemeProvider>
    </>
  );
}

export default App;
