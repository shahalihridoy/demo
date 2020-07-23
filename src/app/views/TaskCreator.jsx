import React, { useState } from "react";
import { Card, Button, TextField } from "@material-ui/core";
import {
  Person,
  Email,
  FileCopy,
  Language,
  CameraRoll,
} from "@material-ui/icons";
import NetworkIcon from "../components/icons/NetworkIcon";

const TaskCreator = ({ closeDialog, ...props }) => {
  const [selectedIndex, setSelectedIndex] = useState(1);

  return (
    <div className="flex-grow flex-column">
      <Card elevation={0} className="px-6 py-10 flex-grow flex items-center">
        <div className="max-w-600 mx-auto w-full">
          <div className="flex justify-between mb-12">
            {[1, 2, 3].map((item, ind) => (
              <div key={ind} className="flex-column">
                <div className="p-8 bg-default border-radius-8 mb-4">
                  <img
                    src="/assets/images/shoe.png"
                    alt="show"
                    className="max-w-120 mx-auto mb-2"
                  />
                  <div className="text-14 text-center max-w-120 mx-auto">
                    Yeezy Boos 350 V2 &lsquo;Zebra&rsquo;
                  </div>
                </div>
                <Button
                  color="secondary"
                  className="text-white"
                  variant={selectedIndex === ind ? "contained" : "outlined"}
                  onClick={() => setSelectedIndex(ind)}
                >
                  Select
                </Button>
              </div>
            ))}
          </div>
          <form>
            <TextField
              className="mb-6"
              label="Profile"
              name="profile"
              variant="outlined"
              size="small"
              fullWidth
              InputProps={{
                startAdornment: (
                  <Person fontSize="small" className="text-muted pr-3" />
                ),
              }}
            />
            <TextField
              className="mb-6"
              label="Site"
              name="site"
              variant="outlined"
              size="small"
              fullWidth
              InputProps={{
                startAdornment: (
                  <Language fontSize="small" className="text-muted pr-3" />
                ),
              }}
            />
            <TextField
              className="mb-6"
              label="Size"
              name="size"
              variant="outlined"
              size="small"
              fullWidth
              InputProps={{
                startAdornment: (
                  <CameraRoll fontSize="small" className="text-muted pr-3" />
                ),
              }}
            />
            <TextField
              className="mb-6"
              label="Email Method"
              name="email_method"
              variant="outlined"
              size="small"
              fullWidth
              InputProps={{
                startAdornment: (
                  <Email fontSize="small" className="text-muted pr-3" />
                ),
              }}
            />
            <TextField
              className="mb-6"
              label="Proxy"
              name="proxy"
              variant="outlined"
              size="small"
              fullWidth
              InputProps={{
                startAdornment: (
                  <NetworkIcon fontSize="small" className="text-muted pr-3" />
                ),
              }}
            />
            <TextField
              className="mb-6"
              label="Amount"
              name="amount"
              variant="outlined"
              size="small"
              fullWidth
              InputProps={{
                startAdornment: (
                  <FileCopy fontSize="small" className="text-muted pr-3" />
                ),
              }}
            />
            <div className="text-center mt-4">
              <Button
                variant="text"
                className="text-muted px-8 mr-4"
                onClick={closeDialog}
              >
                Cancel
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                className="text-inherit px-8"
              >
                Create
              </Button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default TaskCreator;
