import { useMemo, useState } from "react";
import { Box } from "@mui/material";
import Grid from "../components/Grid";
import HomeButton from "../components/HomeButton";

const ComputerVsComputer = () => {
  const [items, setItems] = useState([
    { id: 0, value: "" },
    { id: 1, value: "" },
    { id: 2, value: "" },
    { id: 3, value: "" },
    { id: 4, value: "" },
    { id: 5, value: "" },
    { id: 6, value: "" },
    { id: 7, value: "" },
    { id: 8, value: "" },
  ]);
  const [current, setCurrent] = useState("x");

  //   const availableItems = useMemo(() => )

  const handleBoxClick = () => {};

  return (
    <Box>
      <Grid items={items} onClick={handleBoxClick}></Grid>
      <HomeButton />
    </Box>
  );
};

export default ComputerVsComputer;
