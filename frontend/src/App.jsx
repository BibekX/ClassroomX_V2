import "./App.css";
import { useMemo } from "react";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Navbar from "./Components/Navbar/Navbar";
import RouteProvider from "./Components/RouteProvider";
import "react-image-crop/dist/ReactCrop.css";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <RouteProvider />
    </ThemeProvider>
  );
}

export default App;
