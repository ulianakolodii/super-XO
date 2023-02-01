import { FC, MouseEventHandler } from "react";
import { Box } from "@mui/material";
import { Block } from "../types/Block";
import HomeButton from "./HomeButton";
import WinnerBox from "./WinnerBox";
import ResetButton from "./ResetButton";

const Grid: FC<{
  items: Array<Block>;
  onClick?: ({ id, value }: { id: number; value: string }) => void;
  statusMessage: string;
  handleReset: () => void;
}> = ({ items, statusMessage, handleReset, onClick }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        backgroundColor: "white",
      }}
    >
      <Box
        sx={{
          width: 320,
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
          justifyContent: "center",
        }}
      >
        {items.map(({ id, value }) => {
          return (
            <Box
              onClick={() => onClick?.({ id, value })}
              key={id}
              sx={{
                width: 100,
                height: 100,
                border: "solid grey 1px",
                cursor: "pointer",
                textAlign: "center",
                fontSize: 50,
                paddingTop: "15px",
              }}
            >
              {value}
            </Box>
          );
        })}
      </Box>
      <Box sx={{ marginTop: 3 }}>
        <WinnerBox>{statusMessage}</WinnerBox>
      </Box>
      <Box sx={{ marginTop: 3, display: "flex", gap: 1 }}>
        <ResetButton handleReset={handleReset} />
        <HomeButton handleReset={handleReset} />
      </Box>
    </Box>
  );
};
export default Grid;
