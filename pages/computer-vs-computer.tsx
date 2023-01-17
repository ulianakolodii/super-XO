import { useCallback, useMemo, useState } from "react";
import Grid from "../components/Grid";
import { getRandomNumberTo } from "../utils/getRandomNumberTo";
import { isWinner } from "../utils/isWinner";

const ComputerVsComputer = () => {
  const [items, setItems] = useState([
    { id: 0, value: "" },
    { id: 1, value: "" },
    { id: 2, value: "" },
    { id: 3, value: "" },
    { id: 4, value: "" },
    { id: 5, value: "" },
    { id: 6, value: "" },
    { id: 7, value: "" },
    { id: 8, value: "" },
  ]);
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
    // if (availableItems.length > 0 && !winnerX !winnerO) {
    //   const randomIndex = getRandomNumberTo(availableItems.length - 1);
    //   const randomItem = availableItems[randomIndex]
    // }
  }, [availableItems, winnerX, winnerO]);

  return (
    <>
      <Grid items={items} onClick={handleBoxClick}></Grid>
    </>
  );
};

export default ComputerVsComputer;
