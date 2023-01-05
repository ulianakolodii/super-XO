import { FC } from "react";
import { Box } from "@mui/system";
import { Block } from "../types/Block";

const Grid: FC<{ items: Array<Block>; onClick: () => void }> = ({ items }) => {
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
        width: 320,
        flexWrap: "wrap",
        gap: 1,
        backgroundColor: "white",
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
            }}
          >
            {value}
          </Box>
        );
      })}
    </Box>
  );
};
export default Grid;
