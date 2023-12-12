import "./App.css";
import { CssBaseline, Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "./Components/Navbar";
import RouteProvider from "./Components/RouteProvider";

function App() {
  const theme = createTheme({
    palette: {
      mode: "dark",
      light: {
        main: "#e3f2fd",
      },
    },
    typography: {
      fontFamily: ["Golos Text", "serif"].join(","),
      button: {
        textTransform: "none",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Container component="main" maxWidth="lg" sx={{ mt: 6 }}>
        <RouteProvider />
      </Container>
    </ThemeProvider>
  );
}

export default App;
