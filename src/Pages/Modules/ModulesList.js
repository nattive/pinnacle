import React, { useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { showCourse } from "../../Actions/courseAction";
import { Skeleton } from "@material-ui/lab";
import { Link } from "react-router-dom";
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
  useEffect(() => {
    props.showCourse(props.match.params.course);
  }, []);
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Card style={{ width: "100%" }}>
      <CardHeader title="Course Modules" />
      <Divider />
      <CardContent style={{ heigth: 400 }}>
        {props.course ? (
          props.course.modules.map((item) => (
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
                <ExpansionPanelDetails>
                  <Typography>
                    <Typography variant="body2">{`${
                      item.course_materials ? item.course_materials.length : 0
                    } video material(s)`}</Typography>
                    <Divider />
                    <List>
                      {item.course_materials &&
                        item.course_materials.map((item) => (
                          <React.Fragment key={item.id}>
                            <ListItem button component={Link} to={`${item.id}`}>
                              <ListItemIcon>
                                <PlayCircleOutlineIcon color="primary" />
                              </ListItemIcon>
                              <ListItemText
                                primary={item.title}
                                secondary={`${
                                  item.objective &&
                                  item.objective.substring(0, 100)
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
  course: state.course.showCourse.data,
});

const mapDispatchToProps = {
  showCourse,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModulesList);
