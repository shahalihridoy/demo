import { createMuiTheme } from "@material-ui/core/styles";

const buttonOption = {
  root: {
    textTransform: "none",
    fontWeight: "normal",
  },
};

const outlinedButtonStyle = {
  borderWidth: 2,
  "&:hover": {
    borderWidth: 2,
  },
};

export const materialTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#5d52d4",
      contrastText: "rgba(255,255,255,0.87)",
    },
    secondary: {
      main: "#016f4b",
      contrastText: "rgba(255,255,255,0.87)",
    },
    error: {
      main: "#cd5457",
      contrastText: "rgba(255,255,255,0.87)",
    },
    text: {
      primary: "rgba(255,255,255,0.87)",
      secondary: "#7d8498",
      hint: "#7d8498",
      disabled: "#7d8498",
    },
    background: {
      paper: "#2b324f",
      default: "#242b45",
    },
    contrastThreshold: 3,
    tonalOffset: 0.1,
  },
  typography: {
    fontSize: 14,
    htmlFontSize: 16,
    useNextVariants: true,
    fontFamily: ["Gotham", "Roboto", "Helvetica Neue"].join(","),
    body1: {
      fontSize: 14,
    },
    body2: {
      fontSize: 14,
    },
  },
  overrides: {
    MuiButton: {
      ...buttonOption,
      outlined: {
        ...outlinedButtonStyle,
      },
      outlinedPrimary: {
        ...outlinedButtonStyle,
      },
      outlinedSecondary: {
        ...outlinedButtonStyle,
      },
      outlinedSizeLarge: {
        ...outlinedButtonStyle,
      },
      outlinedSizeSmall: {
        ...outlinedButtonStyle,
      },
    },
    MuiFab: buttonOption,
    MuiCard: {
      root: {
        borderRadius: 8,
      },
    },
    MuiTable: {
      root: {
        tableLayout: "fixed",
      },
    },
    MuiTableCell: {
      head: {
        padding: "12px 0px",
      },
      root: {
        whiteSpace: "pre-wrap",
        padding: "8px 0px",
      },
    },
    MuiTab: {
      root: {
        textTransform: "none",
        borderBottomWidth: 2,
        borderColor: "#4f3f3c",
      },
    },
    MuiDialog: {
      paper: {
        borderRadius: 8,
      },
    },
  },
});
