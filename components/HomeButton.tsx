import { Button } from "@mui/material";
import Link from "next/link";

const HomeButton = () => {
  return <Button variant="outlined"><Link href="/">Choose mode</Link></Button>;
};

export default HomeButton;
