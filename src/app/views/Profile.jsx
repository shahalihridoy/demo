import React, { useState } from "react";
import {
  Card,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Dialog,
} from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import ProfileCreator from "./ProfileCreator";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  borderLeftRounded: {
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  borderRightRounded: {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
}));

const Profile = () => {
  const [profile, setProfile] = useState();
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const userList = [
    {
      card_no: "#### 0838",
      profile_name: "Card1",
      shipping_name: "Bon Jovi",
      expires: "11/20",
    },
    {
      card_no: "#### 0838",
      profile_name: "Card1",
      shipping_name: "Bon Jovi",
      expires: "11/20",
    },
    {
      card_no: "#### 0838",
      profile_name: "Card1",
      shipping_name: "Bon Jovi",
      expires: "11/20",
    },
    {
      card_no: "#### 0838",
      profile_name: "Card1",
      shipping_name: "Bon Jovi",
      expires: "11/20",
    },
    {
      card_no: "#### 0838",
      profile_name: "Card1",
      shipping_name: "Bon Jovi",
      expires: "11/20",
    },
  ];

  const handleCreate = () => {
    setProfile(null);
    setOpen(true);
  };

  const handleEditClick = (data) => {
    // first set this user data into profile
    // then open dialog with that data
    setProfile(data);
    setOpen(true);
  };

  const handleDeleteClick = (user) => {
    // delete user profile here
  };

  const closeDialog = () => setOpen(false);

  return (
    <div className="flex-grow flex-column">
      <div className="mb-6">
        <Button
          variant="outlined"
          color="primary"
          className="text-inherit px-8 border-error"
          onClick={handleCreate}
        >
          Create
        </Button>
      </div>
      <Card elevation={0} className="px-6 pb-4 flex-grow">
        <div className="overflow-auto">
          <Table className="crud-table text-hint whitespace-pre min-w-800">
            <TableHead>
              <TableRow>
                <TableCell className="p-0 border-none" colSpan={3}>
                  <div className="text-muted mb-4  pl-6 mt-6">Card</div>
                </TableCell>
                <TableCell className="p-0 border-none" colSpan={3}>
                  <div className="text-muted mb-4 mt-6">profile_name</div>
                </TableCell>
                <TableCell className="p-0 border-none" colSpan={3}>
                  <div className="text-muted mb-4 mt-6">Card Holder</div>
                </TableCell>
                <TableCell className="p-0 border-none" colSpan={1}>
                  <div className="text-muted mb-4 mt-6">Expires</div>
                </TableCell>
                <TableCell className="p-0 border-none" colSpan={2}>
                  <div className="text-muted mb-4 mt-6 text-center pr-6">
                    Actions
                  </div>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userList.map((user, index) => (
                <TableRow key={index}>
                  <TableCell className="p-0 border-none" colSpan={3}>
                    <div
                      className={clsx(
                        "flex items-center bg-default text-muted py-10px pl-6 mb-2",
                        classes.borderLeftRounded
                      )}
                    >
                      <img
                        src="/assets/images/master-card.png"
                        alt="master-shipping_name"
                        className="h-12 mr-4"
                      />
                      <span>{user.card_no}</span>
                    </div>
                  </TableCell>
                  <TableCell className="p-0 border-none" colSpan={3}>
                    <div className="bg-default text-muted py-10px mb-2">
                      {user.profile_name}
                    </div>
                  </TableCell>
                  <TableCell className="p-0 border-none" colSpan={3}>
                    <div className="bg-default text-muted py-10px mb-2">
                      {user.shipping_name}
                    </div>
                  </TableCell>
                  <TableCell className="p-0 border-none" colSpan={1}>
                    <div className="bg-default text-muted py-10px mb-2">
                      {user.expires}
                    </div>
                  </TableCell>
                  <TableCell className="p-0 border-none" colSpan={2}>
                    <div
                      className={clsx(
                        "flex items-center justify-center bg-default text-muted py-3 mb-2 pr-6",
                        classes.borderRightRounded
                      )}
                    >
                      <Edit
                        className="text-16 cursor-pointer mr-4"
                        fontSize="small"
                        onClick={() => handleEditClick(user)}
                      />
                      <Delete
                        className="text-16 cursor-pointer"
                        fontSize="small"
                        onClick={() => handleDeleteClick(user)}
                      />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>

      <Dialog open={open} maxWidth="xs">
        <ProfileCreator profile={profile} closeDialog={closeDialog} />
      </Dialog>
    </div>
  );
};

export default Profile;
