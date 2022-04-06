import { SetStateAction, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import Cell from "../Cell";

import { checkGameEnd } from "../../utils/checkGameEnd";
import { Turn } from "../../Types";
interface Props {
  turn: Turn;
  setTurn: React.Dispatch<SetStateAction<Turn>>;
}

const BOARD: string[][] = Array.from({ length: 9 }, (_) => Array(9).fill(""));
const variants = {
  initial: {
    scale: 0,
  },
  pop: {
    scale: [0, 0.5, 1, 1.25, 0.85, 1],
    transition: {
      type: "tween",
      duration: 0.5,
      delay: 1,
    },
  },
};

export const Board = ({ turn, setTurn }: Props) => {
  const [board, setBoard] = useState<string[][]>(BOARD);

  const clickCell = (row: number, col: number) => {
    // 이미 점령되어 있는 칸이라면 pass
    if (board[row][col] !== "") return;

    const newBoard = [...board];
    updateBoard(newBoard, row, col);

    const isGameEnd = checkGameEnd({ newBoard, row, col, flag: turn });
    if (isGameEnd) window.alert(`Game over! ${turn} win!`);
    changeTurn();
  };

  const changeTurn = () =>
    setTimeout(() => {
      setTurn((prevTurn) => (prevTurn === "X" ? "O" : "X"));
    }, 300);

  const updateBoard = (newBoard: string[][], row: number, col: number) => {
    newBoard[row][col] = turn;
    setBoard(newBoard);
  };

  return (
    <Container turn={turn}>
      {BOARD.map((ROW: string[], rowIdx: number) => (
        <Row key={rowIdx}>
          {ROW.map((_, colIdx: number) => (
            <CellWrapper
              key={colIdx}
              turn={turn}
              isOccupied={board[rowIdx][colIdx] !== ""}
              onClick={() => clickCell(rowIdx, colIdx)}
            >
              <Cell flag={board[rowIdx][colIdx]} />
            </CellWrapper>
          ))}
        </Row>
      ))}
    </Container>
  );
};

const Container = styled(motion.section).attrs(() => ({
  initial: "initial",
  animate: "pop",
  variants,
}))<{ turn: string }>`
  ${({ theme }) => theme.grid__center};

  border-radius: 1rem;
  box-shadow: 0 0 10px 1px grey;
`;

const Row = styled.li`
  display: grid;
  grid-template-columns: repeat(9, 80px);
`;

const CellWrapper = styled.div<{ turn: string; isOccupied: boolean }>`
  position: relative;
  width: 80px;
  height: 80px;
  box-shadow: inset 0 0 1px lightgray;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    background-color: ${({ theme, turn }) =>
      turn === "X" ? theme.color.red : theme.color.blue};
    border-radius: 0.5em;
    opacity: 0;
    transition: opacity 350ms ease-out;
  }

  &:hover::before {
    opacity: ${({ isOccupied }) => !isOccupied && 1};
  }
`;
