export type BoardType = string[][];
export type InitTurn = Turn | null;
export type Turn = "X" | "O";
export type Winner = Turn | "DRAW";

export type GameState = "START" | "GAME" | "OVER";
