import { useCallback, useEffect, useMemo, useState } from "react";
import { defaultItems } from "../utils/defaultItems";
import Grid from "../components/Grid";
import { getRandomNumberTo } from "../utils/getRandomNumberTo";
import { isWinner } from "../utils/isWinner";
import useGame from "../hooks/useGame";

const ComputerVsComputer = () => {
  const {
    availableItems,
    current,
    items,
    reset,
    winnerO,
    winnerX,
    toggleCurrent,
    setById,
    statusMessage,
  } = useGame();

  const setStateByIndex = useCallback(
    (index: number) => {
      setById(index, current);
      toggleCurrent();
    },
    [current, setById, toggleCurrent]
  );

  const handleBoxClick = useCallback(() => {
    if (availableItems.length > 0 && !winnerX && !winnerO) {
      const randomIndex = getRandomNumberTo(availableItems.length - 1);
      const randomItem = availableItems[randomIndex];
      setStateByIndex(randomItem.id);
    }
  }, [availableItems, winnerX, winnerO, setStateByIndex]);

  useEffect(() => {
    const timer = setTimeout(handleBoxClick, 500);
    return () => clearTimeout(timer);
  }, [handleBoxClick]);

  return (
    <>
      <Grid
        items={items}
        statusMessage={statusMessage}
        handleReset={reset}
      ></Grid>
    </>
  );
};

export default ComputerVsComputer;
