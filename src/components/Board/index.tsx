import { SetStateAction, useState, useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import Cell from "../Cell";

import { checkGameEnd } from "../../utils/checkGameSet";
import { popUp } from "../../constant/variants";
import { BoardType, Turn, Winner } from "../../Types";

interface Props {
  turn: Turn;
  setTurn: React.Dispatch<SetStateAction<Turn>>;
  showResult: (winner: Winner) => void;
}

const SIDE = 9;

export const Board = ({ turn, setTurn, showResult }: Props) => {
  const [board, setBoard] = useState<BoardType>([]);
  const [leftCells, setLeftCells] = useState<number>(SIDE ** 2);

  const changeTurn = (newBoard: BoardType) => {
    setTurn((prevTurn) => (prevTurn === "X" ? "O" : "X"));
    setBoard(newBoard);
    setLeftCells((prevCells) => prevCells - 1);
  };

  const createNextBoard = (row: number, col: number) => {
    const newBoard = [...board];
    newBoard[row][col] = turn;
    return newBoard;
  };

  const handleCellClick = (row: number, col: number) => {
    // 이미 점령되어 있는 칸이라면 pass
    if (board[row][col] !== "") return;

    const newBoard = createNextBoard(row, col);

    const isGameEnd = checkGameEnd({ board: newBoard, row, col, flag: turn });
    if (isGameEnd) showResult(turn);
    else if (leftCells === 1) showResult("DRAW");
    else changeTurn(newBoard);
  };

  useEffect(() => {
    const generateBoard = () =>
      Array.from({ length: SIDE }, () => Array(SIDE).fill(""));

    setBoard(generateBoard());
    return () => setBoard([]);
  }, []);

  return (
    <Container turn={turn}>
      {board.map((ROW: string[], rowIdx: number) => (
        <Row key={rowIdx}>
          {ROW.map((_, colIdx: number) => (
            <CellWrapper
              key={colIdx}
              turn={turn}
              isOccupied={board[rowIdx][colIdx] !== ""}
              onClick={() => handleCellClick(rowIdx, colIdx)}
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
  variants: popUp,
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
    background-color: ${({ theme, turn, isOccupied }) =>
      isOccupied
        ? "transparent"
        : turn === "X"
        ? theme.color.red
        : theme.color.blue};
    border-radius: 0.5em;
    opacity: 0;
    transition: opacity 350ms ease-out;
  }

  &:hover::before {
    opacity: ${({ isOccupied }) => !isOccupied && 1};
  }
`;
