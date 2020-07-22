import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import { blue } from "@material-ui/core/colors";
import { LinearProgress, Box, Typography } from "@material-ui/core";
import BrightnessLowIcon from '@material-ui/icons/BrightnessLow';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
    marginTop: 20,
    marginBottom: 20,
  },
});

function createData(
  CourseName,
  progress,
  grade,
  completed
) {
  return { CourseName, progress, grade, completed };
}

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value
        )}/${props.total}`}</Typography>
      </Box>
    </Box>
  );
}
const rows = [
  createData(
    "Introduction to yam",
    <LinearProgressWithLabel variant="determinate" value={80} total={100} />,
    24,
    <BrightnessLowIcon />
  ),
];
const ProgressTable = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >Course Name</TableCell>
            <TableCell >Your Progress</TableCell>
            <TableCell align="right">Accumulated Grade</TableCell>
            <TableCell align="right">Certificate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.CourseName}>
              <TableCell component="th" scope="row">
                {row.CourseName}
              </TableCell>
              <TableCell align="right">
                {row.progress}
              </TableCell>
              <TableCell align="right">
                {row.grade}
              </TableCell>
              <TableCell align="right">
                {row.completed}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProgressTable);
