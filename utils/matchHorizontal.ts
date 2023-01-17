export const matchHorizontal = (arr: string, value = "X") => {
    return (
      (arr[0] === value && arr[1] === value && arr[2] === value) ||
      (arr[3] === value && arr[4] === value && arr[5] === value) ||
      (arr[6] === value && arr[7] === value && arr[8] === value)
    );
  };