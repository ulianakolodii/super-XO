import { matchDiagonalLeft } from "./matchDiagonalLeft";
import { matchDiagonalRight } from "./matchDiagonalRight";
import { matchVertical } from "./matchVertical";
import { matchHorizontal } from "./matchHorizontal";
import { Block } from "../types/Block";

export const isWinner = (arr: Array<Block>, value: string) =>
  matchHorizontal(arr, value) ||
  matchVertical(arr, value) ||
  matchDiagonalLeft(arr, value) ||
  matchDiagonalRight(arr, value);
