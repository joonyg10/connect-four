import { useState } from "react";
import { InitTurn, GameState } from "./Types";

// [components]
import { StartPage } from "./components/StartPage";
import { Board } from "./components/Board";
import Modal from "./components/Modal";

// @@ [styles]
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/globalStyle";
import { theme } from "./styles/theme";

// @@ App
function App() {
  const [gameState, setGameState] = useState<GameState>("START");

  const startGame = (turn: InitTurn) => turn && setGameState("GAME");
  const restartGame = () => setGameState("GAME");

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {gameState === "START" && <StartPage startGame={startGame} />}
        {gameState === "GAME" && <Board />}
        {gameState === "OVER" && (
          <Modal restartGame={restartGame} winner="DRAW" />
        )}
      </ThemeProvider>
    </>
  );
}

export default App;
