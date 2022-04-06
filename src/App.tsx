import { useState } from "react";
import { InitTurn, GameState, Turn } from "./Types";

// [components]
import { StartPage } from "./components/StartPage";
import { Board } from "./components/Board";
import Modal from "./components/Modal";

// @@ [styles]
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/globalStyle";
import { theme } from "./styles/theme";
import { AnimatePresence } from "framer-motion";

// @@ App
function App() {
  const [gameState, setGameState] = useState<GameState>("START");
  const [turn, setTurn] = useState<Turn>("X");

  const startGame = (turn: InitTurn) => {
    if (!turn) return;
    setGameState("GAME");
    setTurn(turn);
  };
  const restartGame = () => setGameState("GAME");

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <AnimatePresence>
          {gameState === "START" && (
            <StartPage startGame={startGame} key="start_container" />
          )}
        </AnimatePresence>
        {gameState === "GAME" && <Board turn={turn} setTurn={setTurn} />}
        {gameState === "OVER" && (
          <Modal restartGame={restartGame} winner="DRAW" />
        )}
      </ThemeProvider>
    </>
  );
}

export default App;
