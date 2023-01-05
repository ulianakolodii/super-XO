import { FC } from "react";
import { Box } from "@mui/material";
import { Block } from "../types/Block";

const Grid: FC<{ items: Array<Block>; onClick: (index: number) => void }> = ({
  items,
}) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        backgroundColor: "white",
      }}
    >
      <Box sx={{ width: 320, display: "flex", flexWrap: "wrap", gap: 1 }}>
        {items.map(({ id, value }) => {
          return (
            <Box
              key={id}
              sx={{
                width: 100,
                height: 100,
                border: "solid grey 1px",
                cursor: "pointer",
              }}
            >
              {value}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
export default Grid;
