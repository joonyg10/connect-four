import { useState } from "react";
import { InitTurn, GameState, Turn, Winner } from "./Types";

// [components]
import { StartPage, Board, Modal } from "./components";

// @@ [styles]
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/globalStyle";
import { theme } from "./styles/theme";
import { AnimatePresence } from "framer-motion";

// @@ App
function App() {
  const [gameState, setGameState] = useState<GameState>("START");
  const [turn, setTurn] = useState<Turn>("X");
  const [winner, setWinner] = useState<Winner>("DRAW");

  const startGame = (turn: InitTurn) => {
    if (!turn) return;
    setGameState("GAME");
    setTurn(turn);
  };

  const restartGame = () => setGameState("START");
  const showResult = (winner: Winner) => {
    setGameState("OVER");
    setWinner(winner);
  };

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <AnimatePresence>
          {gameState === "START" && (
            <StartPage startGame={startGame} key="start_container" />
          )}
        </AnimatePresence>
        {gameState === "GAME" && (
          <Board turn={turn} setTurn={setTurn} showResult={showResult} />
        )}
        {gameState === "OVER" && (
          <Modal restartGame={restartGame} winner={winner} />
        )}
      </ThemeProvider>
    </>
  );
}

export default App;
