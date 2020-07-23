import React from "react";
import { ErrorOutline } from "@material-ui/icons";

const Footer = () => {
  return (
    <div className="inline-block mx-auto">
      <p className="flex items-center px-4 py-2 border-radius-8 bg-paper mt-0">
        <ErrorOutline className="mr-3" fontSize="small" color="primary" />
        <span className="text-muted text-14">
          A new update is now available, a new raffle is being added and a new
          jigging method is available.
        </span>
      </p>
    </div>
  );
};

export default Footer;
