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

const filterAvailable = (items: Array<Block>) =>
  items.filter((item) => item.value === "");

const ComputerVsComputer = () => {
  const [items, setItems] = useState(
    defaultItems.slice().map((el) => ({ ...el }))
  );
  const [draw, setDraw] = useState(false);

  const availableItems = useMemo(() => filterAvailable(items), [items]);
  const winnerX = useMemo(() => isWinner(items, "x"), [items]);
  const winnerO = useMemo(() => isWinner(items, "o"), [items]);
  const isEnd = useMemo(
    () => winnerX || winnerO || availableItems.length === 0,
    [winnerX, winnerO, availableItems]
  );

  const handleBoxClick = useCallback(
    ({ id }: { id: number }) => {
      setItems((prevItems) => {
        const newItems = [...prevItems];
        newItems[id].value = "x";
        const localAvailableItems = filterAvailable(prevItems);
        if (winnerX || winnerO) {
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
    },
    [winnerO, winnerX]
  );

  const reset = useCallback(() => {
    setItems(defaultItems);
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
