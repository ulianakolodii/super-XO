import { useCallback, useMemo, useState } from "react";
import { Block } from "../types/Block";
import { defaultItems } from "../utils/defaultItems";
import Grid from "../components/Grid";
import { getRandomNumberTo } from "../utils/getRandomNumberTo";
import { isWinner } from "../utils/isWinner";

const filterAvailable = (items: Array<Block>) =>
  items.filter((item) => item.value === "");

const ComputerVsComputer = () => {
  const [items, setItems] = useState(
    defaultItems.slice().map((el) => ({ ...el }))
  );
  const [draw, setDraw] = useState(false);
  const [winnerX, setWinnerX] = useState(false);
  const [winnerO, setWinnerO] = useState(false);

  const handleBoxClick = useCallback(
    ({ id, value }: { id: number; value: string }) => {
      if (value === "") {
        setItems((prevItems) => {
          const newItems = [...prevItems];
          newItems[id].value = "x";
          const localAvailableItems = filterAvailable(prevItems);
          if (isWinner(prevItems, "x")) {
            setWinnerX(true);
            return prevItems;
          } else if (isWinner(prevItems, "o")) {
            setWinnerO(true);
            return prevItems;
          } else if (!localAvailableItems.length) {
            setDraw(true);
            return prevItems;
          }
          const randomIndex = getRandomNumberTo(localAvailableItems.length - 1);
          const randomItem = localAvailableItems[randomIndex];
          newItems[randomItem.id].value = "o";
          return newItems;
        });
      }
    },
    []
  );

  const reset = useCallback(() => {
    setItems(defaultItems.slice().map((el) => ({ ...el })));
    setDraw(false);
    setWinnerO(false);
    setWinnerX(false);
  }, [setItems]);

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

export default ComputerVsComputer;
