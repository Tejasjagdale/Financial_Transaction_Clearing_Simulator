import { createTheme, ThemeProvider } from "@mui/material";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Login from "./Pages/Login";


const theme = createTheme({
  palette: {
    primary: {
      main: "#0072E5", // Set your primary color here
      dark: "#9DC2CC",
      light: "#B1DEE0",
    },
    secondary: {
      main: "#989898", // Set your secondary color here
      light: "#00bcd4",
      dark: "#CFCFCF",
    },
    info: {
      main: "#FFFFFF",
    },
    success: {
      main: "#2E7D32",
    },
  },
});



function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
            </Routes>
          </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
//
