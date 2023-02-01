import { Button } from "@mui/material";
import { FC } from "react";

const ResetButton: FC<{
  handleReset: () => void;
}> = ({ handleReset }) => {
  return (
    <Button variant="outlined" onClick={handleReset}>
      Reset
    </Button>
  );
};

export default ResetButton;
