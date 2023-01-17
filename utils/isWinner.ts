import { matchDiagonalLeft } from "./matchDiagonalLeft";
import { matchDiagonalRight } from "./matchDiagonalRight";
import { matchVertical } from "./matchVertical";
import { matchHorizontal } from "./matchHorizontal";

export const isWinner = (arr: string, value: string) =>
  matchHorizontal(arr, value) ||
  matchVertical(arr, value) ||
  matchDiagonalLeft(arr, value) ||
  matchDiagonalRight(arr, value);
