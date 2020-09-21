import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Container, Divider } from '@material-ui/core';
import { Segment,Container as SemanticContainer, Header } from 'semantic-ui-react';
import parse from "html-react-parser";
import Question from "../Question"
import Comments from './Comments';
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
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
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

function CourseDetails(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className={classes.root}>
            <AppBar position="static" elevation={0}>
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Details" {...a11yProps(0)} />
                    <Tab label="Quiz" {...a11yProps(1)} />
                    <Tab label="Comments" {...a11yProps(2)} />
                    <Tab label="Your Note" {...a11yProps(3)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Container>
                        <Typography variant="h4" className='h4 text-dark mb-3'>Module: {props.title}</Typography>
                <Segment padded >
                
                    <Typography variant="h5" className='h5 text-dark mb-3'>Objective</Typography>
                    <Divider />
                    <Typography variant="body1" className="m-3">{props.objective}</Typography>
                        <Typography variant="h5" className='h5 text-dark mb-3'>Prerequisite</Typography>
                    <Divider />
                        <Typography variant="body1" className="m-3">{parse(props.prerequisite)}</Typography>
                </Segment>
                    <Typography variant="h5"></Typography>
                    <Divider />
                    <SemanticContainer text>
                        <Header as={Typography} variant='h5'> Header</Header>
                    <Typography variant="body1" className="m-3">{parse(props.text)}</Typography>
                    </SemanticContainer>
                    
                </Container>
            </TabPanel>
            <TabPanel value={value} index={1}>
                {props.question ? <Question question={props.question} />:
                 <Typography variant='subtitle1'>There are no question in this module</Typography>}
             </TabPanel>
            <TabPanel value={value} index={2}>
                <Comments />
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item Three 4
            </TabPanel>

        </div>
    );
}

export default CourseDetails