import { Block } from "../types/Block";

export const matchDiagonalLeft = (arr: Array<Block>, value = "X") => {
  return (
    arr[0].value === value && arr[4].value === value && arr[8].value === value
  );
};
