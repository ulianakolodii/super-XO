import { Block } from "../types/Block";

export const matchDiagonalRight = (arr: Array<Block>, value = "X") => {
  return (
    arr[2].value === value && arr[4].value === value && arr[6].value === value
  );
};
