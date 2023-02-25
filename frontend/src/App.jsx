import "./App.css";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "./Components/Navbar";
import RouteProvider from "./Components/RouteProvider";
import "react-image-crop/dist/ReactCrop.css";

function App() {
  const theme = createTheme({
    palette: {
      mode: "dark",
      light: {
        main: "#e3f2fd",
      },
    },
    typography: {
      fontFamily: ["Roboto Serif", "serif"].join(","),
      button: {
        textTransform: "none",
      },
      body2: {
        fontFamily: "roboto",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <RouteProvider />
    </ThemeProvider>
  );
}

export default App;
