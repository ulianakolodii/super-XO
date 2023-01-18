import { Block } from "../types/Block";

export const matchHorizontal = (arr: Array<Block>, value = "X") => {
    return (
      (arr[0].value === value && arr[1].value === value && arr[2].value === value) ||
      (arr[3].value === value && arr[4].value === value && arr[5].value === value) ||
      (arr[6].value === value && arr[7].value === value && arr[8].value === value)
    );
  };