import React, { useState, useEffect, Suspense } from "react";
import { renderRoutes } from "react-router-config";
import { Drawer, useMediaQuery, Hidden, IconButton } from "@material-ui/core";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import { Menu } from "@material-ui/icons";
import Sidenav from "./Sidenav";
import Footer from "./Footer";
import Loader from "app/components/Loader";

const sidenavWidth = 260;

const useStyles = makeStyles(({ palette, ...theme }) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    width: `calc(100% - ${sidenavWidth}px)`,
    minHeight: "100vh",
    color: palette.text.primary,
    paddingLeft: sidenavWidth,

    "& .content": {
      margin: "2rem",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      paddingLeft: 0,
      "& .content": {
        margin: "1rem",
        marginTop: "5rem",
      },
    },
  },
  menuButton: {
    position: "fixed",
    display: "none",
    top: 16,
    left: 16,
    background: "white",
    boxShadow: theme.shadows[6],
    zIndex: 99999999,
    [theme.breakpoints.down("sm")]: {
      display: "unset",
      "& .content": {
        margin: 0,
      },
    },
  },
}));

const AppLayout = ({ routes }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [sidenavOpen, setSidenavOpen] = useState(true);
  const [sidenavVariant, setSidenavVariant] = useState("persistent");
  const classes = useStyles();

  useEffect(() => {
    if (isMobile) {
      setSidenavOpen(false);
      setSidenavVariant("temporary");
    } else {
      setSidenavVariant("persistent");
      setSidenavOpen(true);
    }
  }, [isMobile]);

  return (
    <div className="flex bg-default">
      {!sidenavOpen && (
        <IconButton
          size="medium"
          className={classes.menuButton}
          onClick={() => setSidenavOpen(!sidenavOpen)}
        >
          <Menu className="text-black" />
        </IconButton>
      )}
      <Drawer
        open={sidenavOpen}
        variant={sidenavVariant}
        onClose={() => setSidenavOpen(false)}
      >
        <Sidenav width={sidenavWidth} />
      </Drawer>
      <div className={classes.container}>
        <div className="flex-grow flex-column content">
          <Suspense fallback={<Loader />}>{renderRoutes(routes)}</Suspense>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
