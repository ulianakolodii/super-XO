import { Box, Typography } from "@mui/material";
import { FC } from "react";

const WinnerBox: FC<{ winnerX: boolean; winnerO: boolean }> = ({
  winnerX,
  winnerO,
}) => {
  const winnerIs = () => {
    if (winnerX) {
      return "The winner is X!";
    }
    if (winnerO) {
      return "The winner is O!";
    }
    // if (!winnerO && !winnerX && ) {
    //   return "The Draw!";
    // }
    else {
      return "The game is playing...";
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
