import React from "react";
import { Card, Button, Avatar, TextField } from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import DiscordIcon from "app/components/icons/DiscordIcon";
import SlackIcon from "app/components/icons/SlackIcon";
import { VpnKey } from "@material-ui/icons";
import CaptchaIcon from "app/components/icons/CaptchaIcon";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  logo: {
    border: "3px solid rgba(var(--primary),1)",
  },
}));

const InputProps = {
  style: {
    borderRadius: "300px",
    background: "var(--bg-default)",
    fontWeight: 300,
    paddingLeft: 8,
    paddingRight: 8,
  },
};

const Settings = () => {
  const classes = useStyles();

  return (
    <Card elevation={0} className="p-6">
      <h4 className="mt-0 mb-6 font-normal">Profile</h4>
      <div className="flex flex-wrap mx--2 mb-12">
        <Avatar
          className={clsx("p-1 mx-2 my-1", classes.logo)}
          src="/assets/images/logo.png"
        />
        <div className="mx-2 my-1">
          <h5 className="mt-0 mb-1 font-normal">DiscordName#0001</h5>
          <div className="mb-1 flex">
            <span className="text-muted">Membership Tyle:</span>
            <span className="ml-2">Renewal</span>
          </div>
          <div className="mb-1 flex">
            <span className="text-muted">Renewal:</span>
            <span className="ml-2">04/18/2020</span>
          </div>
          <div className="mb-1 flex mb-8">
            <span className="text-muted">Mail:</span>
            <span className="ml-2">mailexample@gmail.com</span>
          </div>

          <div className="flex mx--2">
            <Button
              variant="outlined"
              color="primary"
              className="text-inherit px-8 mx-2"
            >
              Dashboard
            </Button>
            <Button
              variant="outlined"
              color="primary"
              className="text-inherit px-8 border-error mx-2"
            >
              Logout
            </Button>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h5 className="mt-0 mb-2 font-normal">Webhooks</h5>
        <div className="flex items-center flex-wrap max-w-600 mx--3 mb-2">
          <DiscordIcon className="text-28 text-muted my-1 ml-3" />
          <TextField
            className="my-1 mx-3 flex-grow"
            placeholder="Discord Success Hook"
            variant="outlined"
            size="small"
            InputProps={InputProps}
          />
          <TextField
            className="my-1 mx-3 flex-grow"
            placeholder="Discord Manual Checkouts Hook"
            variant="outlined"
            size="small"
            InputProps={InputProps}
          />
        </div>
        <div className="flex items-center flex-wrap max-w-600 mx--3 mb-2">
          <SlackIcon className="text-28 text-muted my-1 ml-3" />
          <TextField
            className="my-1 mx-3 flex-grow"
            placeholder="Slack Success Hook"
            variant="outlined"
            size="small"
            InputProps={InputProps}
          />
          <TextField
            className="my-1 mx-3 flex-grow"
            placeholder="Slack Manual Checkouts Hook"
            variant="outlined"
            size="small"
            InputProps={InputProps}
          />
        </div>
      </div>

      <div className="mb-6">
        <h5 className="mt-0 mb-2 font-normal">AYCD AutoSolve</h5>
        <div className="flex items-center flex-wrap max-w-500 mx--3 mb-2">
          <SettingsIcon className="text-28 text-muted my-1 ml-3" />
          <TextField
            className="my-1 mx-3 flex-grow"
            placeholder="AYCD AutoSolve Access Token"
            variant="outlined"
            size="small"
            InputProps={InputProps}
          />
        </div>
        <div className="flex items-center flex-wrap max-w-500 mx--3 mb-2">
          <VpnKey className="text-28 text-muted my-1 ml-3" />
          <TextField
            className="my-1 mx-3 flex-grow"
            placeholder="AYCD AutoSolve API Key"
            variant="outlined"
            size="small"
            InputProps={InputProps}
          />
        </div>
      </div>

      <div className="">
        <h5 className="mt-0 mb-2 font-normal">Captcha</h5>
        <div className="flex items-center flex-wrap max-w-500 mx--3 mb-2">
          <CaptchaIcon className="text-28 text-muted my-1 ml-3" />
          <TextField
            className="my-1 mx-3 flex-grow"
            placeholder="2 Captcha Key"
            variant="outlined"
            size="small"
            InputProps={InputProps}
          />
        </div>
        <div className="flex items-center flex-wrap max-w-500 mx--3 mb-2">
          <CaptchaIcon className="text-28 text-muted my-1 ml-3" />
          <TextField
            className="my-1 mx-3 flex-grow"
            placeholder="AntiCaptcha Key"
            variant="outlined"
            size="small"
            InputProps={InputProps}
          />
        </div>
      </div>
    </Card>
  );
};
export default Settings;
