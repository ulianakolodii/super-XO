export const matchDiagonalRight = (arr: string, value = "X") => {
    return arr[2] === value && arr[4] === value && arr[6] === value;
  };