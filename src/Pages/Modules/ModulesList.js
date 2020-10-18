import React, { useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import { connect, useDispatch } from "react-redux";
import { showCourse, showNodule } from "../../Actions/courseAction";
import { Skeleton } from "@material-ui/lab";
import { Link, useHistory } from "react-router-dom";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import {
  Card,
  CardHeader,
  Divider,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { PLAY_MODULES } from "../../Actions/types";

const ExpansionPanel = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);

function ModulesList(props) {
  console.log(props);
  const dispatch = useDispatch()
  const [expanded, setExpanded] = React.useState("panel1");
  const history = useHistory();
  const handleModuleChange = (selectedModule) => {
    dispatch({ type: PLAY_MODULES, payload: selectedModule})
    // history.push(`/learn/course/${props.match.params.course}/${id}`);
  };
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Card style={{ width: "100%"}}>
      <CardHeader title="Course Modules" />
      <Divider />
      <CardContent style={{ minHeight: 500, overflowY: 'auto' }}>
        {props.Modules && props.Modules.length ? (
          props.Modules.map((item) => (
            <React.Fragment Key={item.id}>
              <ExpansionPanel
                square
                expanded={expanded === `panel${item.id}`}
                onChange={handleChange(`panel${item.id}`)}
              >
                <ExpansionPanelSummary
                  aria-controls={`${item.id}d-content`}
                  id={`${item.id}d-header`}
                >
                  <Typography>{item.title}</Typography> <br />
                </ExpansionPanelSummary>
                <ExpansionPanelDetails style={{ maxHeight: 400, overflowY: 'auto' }}>
                  <Typography>
                    <Typography variant="body2">{`${
                      item.course_materials ? item.course_materials.length : 0
                    } video material(s)`}</Typography>
                    <Divider />
                    <List>
                      {item.course_materials &&
                        item.course_materials.map((material) => (
                          <React.Fragment key={material.id}>
                            <ListItem
                              button
                              onClick={() => handleModuleChange(material)}
                            >
                              <ListItemIcon>
                                <PlayCircleOutlineIcon color="primary" />
                              </ListItemIcon>
                              <ListItemText
                                primary={material.title}
                                secondary={`${
                                  material.objective &&
                                  material.objective.substring(0, 100)
                                }...`}
                              />
                            </ListItem>
                            {/* <Divider /> */}
                          </React.Fragment>
                        ))}
                    </List>
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </React.Fragment>
          ))
        ) : (
          <>
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </>
        )}
      </CardContent>
    </Card>
  );
}

const mapStateToProps = (state) => ({
  moduleToPlay: state.course.moduleToPlay,
  course: state.course.showCourse.data,
});

const mapDispatchToProps = {
  showCourse,
  showNodule,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModulesList);
