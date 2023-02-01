import { Box, Typography } from "@mui/material";
import { FC, PropsWithChildren } from "react";

const WinnerBox: FC<PropsWithChildren> = ({ children }) => (
  <Box>
    <Typography variant="h6">{children}</Typography>
  </Box>
);

export default WinnerBox;
