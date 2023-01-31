import { useCallback, useMemo, useState } from "react";
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

const PlayerVsPlayer = () => {
  const [items, setItems] = useState(
    defaultItems.slice().map((el) => ({ ...el }))
  );
  const [current, setCurrent] = useState("x");
  const [draw, setDraw] = useState(false);

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

  const toggleCurrent = () =>
    setCurrent((prevCurrent) => (prevCurrent === "x" ? "o" : "x"));

  const handleBoxClick = useCallback(
    ({ id, value }: { id: number; value: string }) => {
      setItems((prevItems) => {
        if (isEnd) {
          return prevItems;
        }
        const newItems = [...prevItems];
        newItems[id].value = current;
        toggleCurrent();
        return newItems;
      });
    },
    [setItems, isEnd, current]
  );

  const reset = useCallback(() => {
    setItems([
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
    setCurrent("x");
  }, [setItems, setCurrent]);

  const handleReset = useCallback(() => {
    reset();
  }, [reset]);

  return (
    <>
      <Grid
        items={items}
        onClick={handleBoxClick}
        winnerX={winnerX}
        winnerO={winnerO}
        draw={draw}
        handleReset={handleReset}
      ></Grid>
    </>
  );
};

export default PlayerVsPlayer;
