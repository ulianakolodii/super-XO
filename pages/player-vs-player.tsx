import { useCallback, useMemo, useState } from "react";
import { defaultItems } from "../utils/defaultItems";
import Grid from "../components/Grid";
import { isWinner } from "../utils/isWinner";

const PlayerVsPlayer = () => {
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

  const toggleCurrent = () =>
    setCurrent((prevCurrent) => (prevCurrent === "x" ? "o" : "x"));

  const handleBoxClick = useCallback(
    ({ id, value }: { id: number; value: string }) => {
      if (value === "") {
        setItems((prevItems) => {
          if (winnerX || winnerO) {
            return prevItems;
          }
          const newItems = [...prevItems];
          newItems[id].value = current;
          toggleCurrent();
          return newItems;
        });
      }
    },
    [setItems, current, winnerX, winnerO]
  );

  const reset = useCallback(() => {
    setItems(defaultItems.slice().map((el) => ({ ...el })));
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
        draw={availableItems.length === 0}
        handleReset={handleReset}
      ></Grid>
    </>
  );
};

export default PlayerVsPlayer;
