import { useCallback, useEffect, useMemo, useState } from "react";
import { defaultItems } from "../utils/defaultItems";
import Grid from "../components/Grid";
import { getRandomNumberTo } from "../utils/getRandomNumberTo";
import { isWinner } from "../utils/isWinner";


const ComputerVsComputer = () => {
  const [items, setItems] = useState(
    defaultItems.slice().map((el) => ({ ...el }))
  );
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
    setItems(defaultItems.slice().map((el) => ({ ...el })));
    setCurrent("x");
  }, [setItems, setCurrent]);

  const handleReset = useCallback(() => {
    reset();
  }, [reset]);

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
