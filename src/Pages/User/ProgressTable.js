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
import Skeleton from "@material-ui/lab/Skeleton";
import { LinearProgress, Box, Typography } from "@material-ui/core";
import BrightnessLowIcon from "@material-ui/icons/BrightnessLow";
import { useEffect } from "react";

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
const ProgressTable = (props) => {
  const { progress } = props;
  console.log(progress);

  return (
    <div className="table-responsive m-4">
      <table className="table table-hover bg-success text-light">
        <thead>
          <tr>
            <th scope="col">Course</th>
            <th scope="col">Module</th>
            <th scope="col">Progress</th>
            <th scope="col">Average Grade</th>
            <th scope="col">completed</th>
          </tr>
        </thead>
        <tbody>
          {!props.isLoadingProgress ? (
            progress && progress.length > 0 ? (
              progress.map((item, id) => (
                <tr key={id}>
                  <th scope="row">{item.course_name}</th>
                  <th scope="row">{item.module_name}</th>
                  <td>
                    <LinearProgressWithLabel
                      variant="determinate"
                      value={Object.keys(item.consumed_materials_array).length}
                      total={item.total_course_material}
                    />
                  </td>
                  <td>{24}</td>
                  <td>
                    <BrightnessLowIcon />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4}>You haven't start any course</td>
              </tr>
            )
          ) : (
            <tr>
              <td scope="row">
                <Skeleton />
              </td>
              <td scope="row">
                <Skeleton />
              </td>

              <td scope="row">
                <Skeleton />
              </td>
              <td scope="row">
                <Skeleton />
              </td>
              <td scope="row">
                <Skeleton />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  progress: state.module.userProgress.data,
  isLoadingProgress: state.loading.isLoadingUserProgress,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProgressTable);
