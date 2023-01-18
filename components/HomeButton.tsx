import { Button } from "@mui/material";
import { FC } from "react";
import Link from "next/link";

const HomeButton: FC<{
  handleReset: () => void;
}> = ({handleReset}) => {
  return (
    <Button variant="outlined" onClick={handleReset}>
      <Link href="/">Choose mode</Link>
    </Button>
  );
};

export default HomeButton;
