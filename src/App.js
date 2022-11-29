import { useMemo, useState } from "react";
import { Box, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppDrawer from "components/AppDrawer";
import Main from "components/Main";
import PrimaryAppBar from "components/PrimaryAppbar";
import AppState from "state/appState";
import appTheme, { palette } from "styles/theme";
import "./App.css";

function App() {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      }
    }),
    []
  );

  const theme = useMemo(() =>
    createTheme({
      palette: { ...palette, mode: mode },
      ...appTheme
    })
  );

  return (
    <ThemeProvider theme={theme}>
      <AppState>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <PrimaryAppBar switchColorMode={colorMode.toggleMode} />
          <CssBaseline />
          <AppDrawer />
          <Main />
        </Box>
      </AppState>
    </ThemeProvider>
  );
}

export default App;
