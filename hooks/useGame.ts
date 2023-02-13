import { useState, useMemo, useCallback } from "react";
import { defaultItems } from "../utils/defaultItems";
import { isWinner } from "../utils/isWinner";

const useGame = (initialCurrent: "x" | "o" = "x") => {
  const [items, setItems] = useState(
    defaultItems.slice().map((el) => ({ ...el }))
  );
  const [current, setCurrent] = useState(initialCurrent);

  const availableItems = useMemo(
    () => items.filter((item) => item.value === ""),
    [items]
  );

  const winnerX = useMemo(() => isWinner(items, "x"), [items]);
  const winnerO = useMemo(() => isWinner(items, "o"), [items]);
  const draw = useMemo(() => availableItems.length === 0, [availableItems]);

  const setById = (id: number, value: "o" | "x") => {
    setItems((prevItems) => {
      const newItems = [...prevItems];
      if (winnerX || winnerO || draw) {
        return prevItems;
      }
      newItems[id].value = value;
      return newItems;
    });
  };

  const reset = useCallback(() => {
    setItems(defaultItems.slice().map((el) => ({ ...el })));
    setCurrent("x");
  }, [setItems, setCurrent]);

  const toggleCurrent = useCallback(
    () => setCurrent((prevCurrent) => (prevCurrent === "x" ? "o" : "x")),
    [setCurrent]
  );

  const statusMessage = useMemo(() => {
    const dictionary = new Map([
      [draw, "The Draw!"],
      [winnerO, "The winner is O!"],
      [winnerX, "The winner is X!"],
    ]);
    return dictionary.get(true) || "The game is being played...";
  }, [draw, winnerO, winnerX]);

  return {
    items,
    setItems,
    reset,
    current,
    setCurrent,
    toggleCurrent,
    availableItems,
    winnerO,
    winnerX,
    draw,
    setById,
    statusMessage,
  };
};

export default useGame;
