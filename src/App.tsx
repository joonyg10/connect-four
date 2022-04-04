import { useState } from "react";

// [components]
import { Board } from "./components/Board";
import Modal from "./components/Modal";

// @@ [styles]
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/globalStyle";
import { theme } from "./styles/theme";

// @@ App
function App() {
  const [gameState, setGameState] = useState<"GAME" | "OVER">("OVER");

  const restartGame = () => {
    setGameState("GAME");
  };

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Board />
        {gameState === "OVER" && (
          <Modal restartGame={restartGame} winner="DRAW" />
        )}
      </ThemeProvider>
    </>
  );
}

export default App;
