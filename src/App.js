import "./App.css";
// instead of "App.css", could use GlobalStyles from "styled-components"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignInPage from "./pages/SignInPage";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/signin" element={<SignInPage />} exact />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
