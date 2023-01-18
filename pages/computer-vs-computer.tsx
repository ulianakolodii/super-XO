import { useCallback, useEffect, useMemo, useState } from "react";
import { Block } from "../types/Block";
import Grid from "../components/Grid";
import { getRandomNumberTo } from "../utils/getRandomNumberTo";
import { isWinner } from "../utils/isWinner";

const defaultItems: Array<Block> = [
  { id: 0, value: "" },
  { id: 1, value: "" },
  { id: 2, value: "" },
  { id: 3, value: "" },
  { id: 4, value: "" },
  { id: 5, value: "" },
  { id: 6, value: "" },
  { id: 7, value: "" },
  { id: 8, value: "" },
];

const ComputerVsComputer = () => {
  const [items, setItems] = useState(defaultItems);
  const [current, setCurrent] = useState("x");

  const availableItems = useMemo(
    () => items.filter((item) => item.value === ""),
    [items]
  );
  const winnerX = useMemo(() => isWinner(items, "x"), [items]);
  const winnerO = useMemo(() => isWinner(items, "o"), [items]);
  const isEnd = useMemo(
    () => winnerX || winnerO || availableItems.length === 0,
    [winnerX, winnerO, availableItems]
  );

  const setStateByIndex = useCallback(
    (index: number) => {
      if (!isEnd && items[index].value === "") {
        const item = items[index];
        setItems((prevItems) => {
          const newItems = [...prevItems];
          newItems[item.id].value = current;
          return newItems;
        });
        setCurrent((prevCurrent) => (prevCurrent === "x" ? "o" : "x"));
      }
    },
    [current, items, isEnd]
  );

  const handleBoxClick = useCallback(() => {
    if (availableItems.length > 0 && !winnerX && !winnerO) {
      const randomIndex = getRandomNumberTo(availableItems.length - 1);
      const randomItem = availableItems[randomIndex];
      setStateByIndex(randomItem.id);
    }
  }, [availableItems, winnerX, winnerO, setStateByIndex]);

  const reset = useCallback(() => {
    setItems(defaultItems);
  }, [setItems]);

  const handleReset = () => {
    console.log("reset");
  };

  // const handleReset = useCallback(() => {
  //   if (isEnd) {
  //     reset();
  //   }
  // }, [reset, isEnd]);

  useEffect(() => {
    const timer = setTimeout(handleBoxClick, 500);
    return () => clearTimeout(timer);
  }, [handleBoxClick]);

  return (
    <>
      <Grid
        items={items}
        onClick={handleBoxClick}
        winnerX={winnerX}
        winnerO={winnerO}
        draw={availableItems.length === 0}
        handleReset={handleReset}
      ></Grid>
    </>
  );
};

export default ComputerVsComputer;
