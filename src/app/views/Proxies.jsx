import React from "react";
import {
  Card,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import { PlayArrow, Delete } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  borderLeftRounded: {
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  borderRightRounded: {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
  card1: {
    flex: "5 5 0",
    [theme.breakpoints.down("sm")]: {
      flex: "1 1 0",
      width: "100%",
      minWidth: 280,
    },
  },
  card2: {
    flex: "7 7 0",
    [theme.breakpoints.down("sm")]: {
      flex: "1 1 0",
      width: "100%",
      minWidth: 280,
    },
  },
}));

const Proxies = () => {
  const classes = useStyles();

  return (
    <div className="flex-grow flex-column w-full">
      <div className="mb-2 flex flex-wrap justify-between">
        <div>
          <Button
            variant="outlined"
            color="primary"
            className="text-inherit px-8 mr-2 my-2"
          >
            Export
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className="text-inherit px-8 mr-6 my-2"
          >
            Import
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            className="text-inherit px-8 mr-6 my-2"
          >
            Save
          </Button>
        </div>
        <div className="flex flex-wrap">
          <Button
            variant="outlined"
            color="secondary"
            className="text-inherit px-8 mr-6 my-2"
          >
            Test All
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className="text-inherit px-8 border-error my-2"
          >
            Clear All
          </Button>
        </div>
      </div>

      <div className="flex-grow flex flex-wrap h-full mx--2">
        <Card elevation={0} className={clsx("px-6 pb-4 m-2", classes.card1)}>
          <div className="overflow-auto">
            <Table className="crud-table text-hint whitespace-pres">
              <TableHead>
                <TableRow>
                  <TableCell className="p-0 border-none" colSpan={2}>
                    <div className="text-muted mb-4  pl-6 mt-6">Proxes</div>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {[1, 2, 3, 4, 5, 6].map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="p-0 border-none" colSpan={2}>
                      <div className="flex items-center bg-default text-muted py-10px pl-6 mb-2 border-radius-4">
                        173.101.101:8080
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
        <Card elevation={0} className={clsx("px-6 pb-4 m-2", classes.card2)}>
          <div className="overflow-auto ">
            <Table className="crud-table text-hint whitespace-pres">
              <TableHead>
                <TableRow>
                  <TableCell className="p-0 border-none" colSpan={3}>
                    <div className="text-muted mb-4  pl-6 mt-6">IP:Port</div>
                  </TableCell>
                  <TableCell className="p-0 border-none" colSpan={3}>
                    <div className="text-muted mb-4 mt-6">User:Pass</div>
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
                    <TableCell className="p-0 border-none" colSpan={3}>
                      <div
                        className={clsx(
                          "flex items-center bg-default text-muted py-10px pl-6 mb-2",
                          classes.borderLeftRounded
                        )}
                      >
                        173.101.101:8080
                      </div>
                    </TableCell>
                    <TableCell className="p-0 border-none" colSpan={3}>
                      <div className="bg-default text-muted py-10px mb-2">
                        nakedfet1:seek1
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
                          className="text-16 cursor-pointer mr-4"
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
      </div>
    </div>
  );
};

export default Proxies;
