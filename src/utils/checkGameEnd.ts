type Prop = {
  newBoard: string[][];
  row: number;
  col: number;
  flag: "X" | "O";
};
type Diffrential = { dx: number; dy: number };
type ConnectFour = Prop & Diffrential;

const createVector = (v: number[]) => {
  const _vector: number[] = v;
  let _movedCnt: number = 0;

  const getLastIdx = (_: ConnectFour) => {
    while (1) {
      const [nx, ny] = [_vector[0] + _.dx, _vector[1] + _.dy];

      if (nx < 0 || nx >= 9 || ny < 0 || ny >= 9) break;
      if (_.newBoard[nx][ny] !== _.flag) break;
      [_vector[0], _vector[1]] = [nx, ny];
      _movedCnt += 1;
    }
  };
  const getMovedCnt = () => _movedCnt;

  return { getLastIdx, getMovedCnt };
};

const checkConnectFour = (_: Prop & { dl: number[]; dr: number[] }) => {
  const lp = createVector([_.row, _.col]);
  const rp = createVector([_.row, _.col]);
  lp.getLastIdx({ ..._, dx: _.dl[0], dy: _.dl[1] });
  rp.getLastIdx({ ..._, dx: _.dr[0], dy: _.dr[1] });

  return rp.getMovedCnt() + lp.getMovedCnt() + 1;
};

export const checkGameEnd = (_: Prop): boolean => {
  for (const [dl, dr] of DIRECTION) {
    const connectionCnt = checkConnectFour({ ..._, dl, dr });
    if (connectionCnt >= 4) return true;
  }
  return false;
};

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
