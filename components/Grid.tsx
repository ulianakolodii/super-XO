import { FC } from "react";
import { Box } from "@mui/material";
import { Block } from "../types/Block";
import HomeButton from "../components/HomeButton";
import WinnerBox from "./WinnerBox";

const Grid: FC<{
  items: Array<Block>;
  onClick: (index: number) => void;
  winnerX: boolean;
  winnerO: boolean;
}> = ({ items, winnerX, winnerO }) => {
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
        <WinnerBox winnerX={winnerX} winnerO={winnerO} />
      </Box>
      <Box sx={{ marginTop: 3 }}>
        <HomeButton />
      </Box>
    </Box>
  );
};
export default Grid;
