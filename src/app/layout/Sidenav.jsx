import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import { navigations } from "app/navigations";
import { Button, Icon, IconButton } from "@material-ui/core";
import {
  ArrowRightAlt,
  Person,
  PowerSettingsNew,
  Dashboard,
} from "@material-ui/icons";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  sidenav: {
    width: (props) => props.width,
    fontSize: 14,
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  },
  activeClassName: {
    background: "linear-gradient(to right, #514abe 0%,#383b8c 100%)",
    color: `${palette.primary.contrastText} !important`,
  },
}));

const Sidenav = ({ width }) => {
  const classes = useStyles({ width });

  return (
    <div className={classes.sidenav}>
      <NavLink to="/">
        <div className="logo-container py-12 px-4 text-center">
          <img src="/assets/images/logo.png" alt="logo" className="w-88" />
          <p className="m-0">
            <span className="text-muted">Welcome to</span> Polarcop Raffle
          </p>
        </div>
      </NavLink>
      <div className="flex-grow">
        {navigations.map((item, ind) => (
          <NavLink
            key={ind}
            to={item.link}
            className="block py-4 px-6 flex items-center text-muted"
            activeClassName={classes.activeClassName}
          >
            <item.icon fontSize="small" className="mr-4 text-18" />
            <span>{item.title}</span>
          </NavLink>
        ))}
        <div className="block mt-4 px-6 flex justify-center items-center text-muted">
          <IconButton>
            <Dashboard fontSize="small" />
          </IconButton>
          <IconButton>
            <Person fontSize="small" />
          </IconButton>
          <IconButton>
            <PowerSettingsNew fontSize="small" />
          </IconButton>
        </div>
      </div>

      <div className="px-6 text-center">
        <Button variant="outlined" color="primary" className="w-full">
          <span className="text-white pr-2">Update Now</span>
          <ArrowRightAlt color="primary" fontSize="small" />
        </Button>
        <p className="text-muted">Version 1.0.0</p>
      </div>
    </div>
  );
};

export default Sidenav;
