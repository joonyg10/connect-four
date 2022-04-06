export type InitTurn = Turn | undefined;
export type Turn = "X" | "O";
export type Winner = Turn | "DRAW";

export type GameState = "START" | "GAME" | "OVER";
