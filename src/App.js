import { createTheme, Stack, ThemeProvider } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Feed from "./components/Feed";
import NavBar from "./components/NavBar";
import RightBar from "./components/RightBar";
import Sidebar from "./components/Sidebar";
import Add from "./components/Add";

function App() {
  const [mode, setMode] = useState("dark");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color="text.primary">
        <NavBar />
        <Stack direction="row" spacing={2} justifyContent="center">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <RightBar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
