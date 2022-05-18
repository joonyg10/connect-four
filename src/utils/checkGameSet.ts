import { Turn } from "../Types";
import { Vector } from "./Vector";

// 이전의 보드, 현재 클릭된 (x, y), turn player의 정보 받는다.
type DataProps = {
  board: string[][];
  row: number;
  col: number;
  flag: Turn;
};

type DataWithDifferential = DataProps & {
  dl: number[];
  dr: number[];
};

export const checkConnectFour = (data: DataWithDifferential) => {
  const { board, row, col, flag, dl, dr } = data;
  const leftVector = new Vector(row, col);
  const rightVector = new Vector(row, col);

  leftVector.getLastIdx(board, flag, dl);
  rightVector.getLastIdx(board, flag, dr);

  return rightVector.getMovedCnt() + leftVector.getMovedCnt() + 1;
};

export const checkGameEnd = (data: DataProps) => {
  for (const [dl, dr] of DIRECTION) {
    const connectedCnt: number = checkConnectFour({ ...data, dl, dr });
    if (connectedCnt >= 4) return true;
  }

  return false;
};

// 가로, 세로, \ , / 방향에 대한 증가량 배열
const DIRECTION = [
  [
    [0, -1],
    [0, 1],
  ],
  [
    [-1, 0],
    [1, 0],
  ],
  [
    [-1, -1],
    [1, 1],
  ],
  [
    [1, -1],
    [-1, 1],
  ],
];
