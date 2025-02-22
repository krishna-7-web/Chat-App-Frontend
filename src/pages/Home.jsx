import { Box, Typography } from "@mui/material";
import AppLayout from "../components/layout/AppLayout";
import Title from "../components/shared/Title";
import { grayColor } from "../constants/color";

const Home = () => {
  return (
    <>
      <Box bgcolor={grayColor} height={"100%"}>
        <Typography p={"2rem"} variant="h5" textAlign={"center"}>
          Select a friend to chat
        </Typography>
      </Box>
    </>
  );
};

export default AppLayout()(Home);
