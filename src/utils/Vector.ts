import { Turn, BoardType } from "../Types";

interface IVector {
  _x: number;
  _y: number;
  _movedCnt: number;
  getLastIdx: (board: BoardType, flag: Turn, d: number[]) => void;
  getMovedCnt: () => number;
}

export class Vector implements IVector {
  _x: number;
  _y: number;
  _movedCnt: number;

  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
    this._movedCnt = 0;
  }

  private updateVector(nx: number, ny: number) {
    [this._x, this._y] = [nx, ny];
  }

  getLastIdx(board: BoardType, flag: Turn, d: number[]) {
    const [dx, dy] = d;

    while (1) {
      const [nx, ny] = [this._x + dx, this._y + dy];

      if (nx < 0 || nx >= 9 || ny < 0 || ny >= 9) break;
      if (board[nx][ny] !== flag) break;
      this.updateVector(nx, ny);
      this._movedCnt += 1;
    }
  }

  getMovedCnt() {
    return this._movedCnt;
  }
}
