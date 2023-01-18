import { Box, Typography } from "@mui/material";
import { FC } from "react";

const WinnerBox: FC<{ winnerX: boolean; winnerO: boolean, draw: boolean }> = ({
  winnerX,
  winnerO,
  draw
}) => {
  const winnerIs = () => {
    if (winnerX) {
      return "The winner is X!";
    }
    if (winnerO) {
      return "The winner is O!";
    }
    if (draw) {
      return "The Draw!";
    }
    else {
      return "The game is being played...";
    }
  };
  winnerIs();
  return (
    <Box>
      <Typography variant="h6">{winnerIs()}</Typography>
    </Box>
  );
};

export default WinnerBox;
