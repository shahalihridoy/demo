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
import { PlayArrow, Pause, Delete } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import TaskCreator from "./TaskCreator";

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

const Raffles = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const closeDialog = () => setOpen(false);

  return (
    <div className="flex-grow flex-column">
      <div className="mb-4 flex flex-wrap justify-between">
        <Button
          variant="outlined"
          color="primary"
          className="text-inherit px-8 my-2"
          onClick={() => setOpen(true)}
        >
          Create Tasks
        </Button>
        <div className="flex flex-wrap mx--3">
          <Button
            variant="outlined"
            color="secondary"
            className="text-inherit px-8 mx-3 my-2"
          >
            Start Tasks
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className="text-inherit px-8 border-error mx-3 my-2"
          >
            Stop Tasks
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className="text-inherit px-8 border-error mx-3 my-2"
          >
            Delete Tasks
          </Button>
        </div>
      </div>
      <Card elevation={0} className="px-6 pb-4 flex-grow">
        <div className="overflow-auto">
          <Table className="crud-table text-hint whitespace-pre min-w-800">
            <TableHead>
              <TableRow>
                <TableCell className="p-0 border-none" colSpan={2}>
                  <div className="text-muted mb-4  pl-6 mt-6">ID</div>
                </TableCell>
                <TableCell className="p-0 border-none" colSpan={2}>
                  <div className="text-muted mb-4 mt-6">Site</div>
                </TableCell>
                <TableCell className="p-0 border-none" colSpan={2}>
                  <div className="text-muted mb-4 mt-6">Profile</div>
                </TableCell>
                <TableCell className="p-0 border-none" colSpan={2}>
                  <div className="text-muted mb-4 mt-6">Proxy</div>
                </TableCell>
                <TableCell className="p-0 border-none" colSpan={2}>
                  <div className="text-muted mb-4 mt-6">Status</div>
                </TableCell>
                <TableCell className="p-0 border-none" colSpan={2}>
                  <div className="text-muted mb-4 mt-6 text-center pr-6">
                    Actions
                  </div>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[1, 2, 3, 4, 5, 6].map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="p-0 border-none" colSpan={2}>
                    <div
                      className={clsx(
                        "flex items-center bg-default text-muted py-10px pl-6 mb-2",
                        classes.borderLeftRounded
                      )}
                    >
                      {item.toString().padStart(2, 0)}
                    </div>
                  </TableCell>
                  <TableCell className="p-0 border-none" colSpan={2}>
                    <div className="bg-default text-muted py-10px mb-2">
                      NakedCPH
                    </div>
                  </TableCell>
                  <TableCell className="p-0 border-none" colSpan={2}>
                    <div className="bg-default text-muted py-10px mb-2">
                      Alex FT 1
                    </div>
                  </TableCell>
                  <TableCell className="p-0 border-none" colSpan={2}>
                    <div className="bg-default text-muted py-10px mb-2">
                      Yes
                    </div>
                  </TableCell>
                  <TableCell className="p-0 border-none" colSpan={2}>
                    <div className="bg-default text-primary py-10px mb-2">
                      Waiting for typeform...
                    </div>
                  </TableCell>
                  <TableCell className="p-0 border-none" colSpan={2}>
                    <div
                      className={clsx(
                        "flex items-center justify-center bg-default text-muted py-3 mb-2 pr-6",
                        classes.borderRightRounded
                      )}
                    >
                      <PlayArrow
                        className="text-16 cursor-pointer mr-2"
                        fontSize="small"
                      />
                      <Pause
                        className="text-16 cursor-pointer mr-2"
                        fontSize="small"
                      />
                      <Delete
                        className="text-16 cursor-pointer"
                        fontSize="small"
                      />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>

      <Dialog open={open} maxWidth="md" fullWidth={true} scroll="body">
        <TaskCreator closeDialog={closeDialog} />
      </Dialog>
    </div>
  );
};

export default Raffles;
