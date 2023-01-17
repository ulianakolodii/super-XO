export const matchDiagonalLeft = (arr: string, value = "X") => {
    return arr[0] === value && arr[4] === value && arr[8] === value;
  };