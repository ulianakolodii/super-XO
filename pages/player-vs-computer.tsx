import { useEffect } from "react";
import { Block } from "../types/Block";
import Grid from "../components/Grid";
import { getRandomNumberTo } from "../utils/getRandomNumberTo";
import useGame from "../hooks/useGame";

const ComputerVsComputer = () => {
  const {
    availableItems,
    current,
    items,
    reset,
    setById,
    toggleCurrent,
    statusMessage,
  } = useGame();

  const handleBoxClick = ({ id, value }: Block) => {
    if (value !== "") {
      return;
    }
    setById(id, current);
    toggleCurrent();
  };

  useEffect(() => {
    if (
      current === "o" &&
      availableItems.length < 9 &&
      availableItems.length > 0
    ) {
      const randomIndex = getRandomNumberTo(availableItems.length - 1);
      const randomItem = availableItems[randomIndex];
      toggleCurrent();
      setById(randomItem.id, current);
    }
  }, [current, availableItems, setById, toggleCurrent]);

  return (
    <>
      <Grid
        items={items}
        onClick={handleBoxClick}
        statusMessage={statusMessage}
        handleReset={reset}
      ></Grid>
    </>
  );
};

export default ComputerVsComputer;
