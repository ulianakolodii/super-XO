import { Block } from "../types/Block";
import Grid from "../components/Grid";
import useGame from "../hooks/useGame";

const PlayerVsPlayer = () => {
  const { current, items, reset, setById, toggleCurrent, statusMessage } =
    useGame();

  const handleBoxClick = ({ id, value }: Block) => {
    if (value !== "") {
      return;
    }
    setById(id, current);
    toggleCurrent();
  };

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

export default PlayerVsPlayer;
