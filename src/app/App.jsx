import "./app.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { materialTheme } from "app/theme";
import GlobalStyles from "app/styles/GlobalStyles";
import { rootRoutes } from "./Routes";
import AppLayout from "./layout/AppLayout";

const App = () => {
  return (
    <ThemeProvider theme={materialTheme}>
      <GlobalStyles>
        <Router>
          <AppLayout routes={rootRoutes} />
        </Router>
      </GlobalStyles>
    </ThemeProvider>
  );
};

export default App;
