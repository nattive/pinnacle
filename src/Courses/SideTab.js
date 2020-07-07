import React from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {
  Paper,
  List,
  ListItem,
  Avatar,
  TextField,
  Button,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { BaseUrl } from "../Patials/BaseUrl";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import { Rating } from "@material-ui/lab";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const playing = useSelector((state) => state.course.playCourse);

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const StyledRating = withStyles({
  iconFilled: {
    color: "#ff6d75",
  },
  iconHover: {
    color: "#ff3d47",
  },
})(Rating);

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    "aria-controls": `wrapped-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 5,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SideTab() {
  const classes = useStyles();
  const [value, setValue] = React.useState("one");
  const [rating, newRating] = React.useState(0);
  const playing = useSelector((state) => state.course.playCourse);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Paper position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="wrapped label tabs example"
        >
          <Tab
            value="one"
            label="Course Modules"
            wrapped
            {...a11yProps("one")}
          />
          <Tab value="two" label="Reviews" {...a11yProps("two")} />
        </Tabs>
      </Paper>
      <TabPanel value={value} index="one">
        {playing.course_materials !== undefined &&
          playing.course_materials.map((item) => (
            <ListItem
              button
              key={item.id}
              // onClick={() => this.handlePlay(item.id, item.title)}
            >
              <PlayCircleFilledIcon className="mr-2" />
              <Typography style={{ fontSize: "12px" }}>{item.title}</Typography>
            </ListItem>
          ))}
      </TabPanel>
      <TabPanel value={value} index="two" className="w-100">
        <Typography component="legend">Rate this course</Typography>
        <Rating
        size="large"
          name="simple-controlled"
          value={rating}
          onChange={(event, newRating) => {
            console.log(newRating);
            newRating(newRating);
          }}
        />
        <Typography component="legend" className="p-2">
          Write a review
        </Typography>
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="outlined"
          className="m-2"
        />
        <Button variant="contained" color="primary" className="m-2">
          Submit Review
        </Button>
      </TabPanel>
    </div>
  );
}
