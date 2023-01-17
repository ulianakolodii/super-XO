import { matchDiagonalLeft } from "./matchDiagonalLeft";
import { matchDiagonalRight } from "./matchDiagonalRight";
import { matchVertical } from "./matchVertical";
import { matchHorizontal } from "./matchHorizontal";

export const isWinner = (arr: Array<Object>, value: string) =>
  matchHorizontal(arr, value) ||
  matchVertical(arr, value) ||
  matchDiagonalLeft(arr, value) ||
  matchDiagonalRight(arr, value);
