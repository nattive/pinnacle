import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Paper, List, ListItem, Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { BaseUrl } from "../Patials/BaseUrl";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";

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
          <Tab value="two" label="Comments" {...a11yProps("two")} />
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
              <PlayCircleFilledIcon className='mr-2' />
              <Typography style={{fontSize: '12px'}}>
                {item.title}
              </Typography>
            </ListItem>
          ))}
      </TabPanel>
      <TabPanel value={value} index="two">
        Item Two
      </TabPanel>
    </div>
  );
}
