import { Stack } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import Feed from "./components/Feed";
import NavBar from "./components/NavBar";
import RightBar from "./components/RightBar";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <Box>
      <NavBar/>
      <Stack direction="row" spacing={2} justifyContent="center">
        <Sidebar />
        <Feed />
        <RightBar />
      </Stack>
    </Box>
  );
}

export default App;
