import { FC, MouseEventHandler } from "react";
import { Box } from "@mui/material";
import { Block } from "../types/Block";
import HomeButton from "../components/HomeButton";
import WinnerBox from "./WinnerBox";

const Grid: FC<{
  items: Array<Block>;
  onClick: ({ id }: { id: number }) => void;
  winnerX: boolean;
  winnerO: boolean;
  draw: boolean;
  handleReset: () => void;
}> = ({ items, winnerX, winnerO, draw, handleReset, onClick }) => {
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
              onClick={() => onClick({ id })}
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
        <WinnerBox winnerX={winnerX} winnerO={winnerO} draw={draw} />
      </Box>
      <Box sx={{ marginTop: 3 }}>
        <HomeButton handleReset={handleReset} />
      </Box>
    </Box>
  );
};
export default Grid;
