import React, { createRef } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import VideoPlayer from '../../General Components/VideoPlayer/VideoPlayer';
import { useEffect } from 'react';
import { playCourse } from "../../Actions/courseAction"
import { Skeleton } from '@material-ui/lab';
import ModulesList from '../../Pages/Modules/ModulesList';
import { Sticky } from 'semantic-ui-react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Container, Typography } from '@material-ui/core';
import CourseDetails from './CourseDetails';
import { PLAY_MODULES } from '../../Actions/types';

function Play(props) {
    const [playing, setPlaying] = React.useState({});
    const dispatch = useDispatch()

    const contextRef = createRef()

    useEffect(() => {
        props.playCourse(props.match.params.course)
    }, [props.match.params.course])

    useEffect(() => {
        if (props.course && props.course.Modules && props.course.Modules[0] && props.course.Modules[0].course_materials[0]) {
            dispatch({ type: PLAY_MODULES, payload: props.course.Modules[0].course_materials[0] })
            // setModule(props.modulePlaying.course_materials)
        }
    }, [props.course.Modules])
    useEffect(() => {
        setPlaying(props.modulePlaying)
    }, [props.modulePlaying])
    // setModule
    return (
        <>
            <div className="row bg-light no-gutters" style={{ top: '5em' }}>
                <div className="col-xs-12 col-sm-12 col-md-8 w-100">
                    {playing.videoPath
                        ? <VideoPlayer videoUrl={playing.videoPath}
                            banner={playing.images} /> : <Skeleton height={500} />}
                    {playing.id ? <CourseDetails {...playing} /> : <Skeleton height={300} />}
                </div>
                <div className="col-xs-12 col-sm-12 col-md-4 w-100 ">
                    <div className="position-fixed-lg" >

                        <ModulesList Modules={props.course && props.course.Modules} />
                    </div>
                </div>

            </div>
        </>
    );

}


function mapStateToProps(state, ownProps) {
    return {
        course: state.course.playCourse,
        modulePlaying: state.course.modulePlaying
    };
}

export default connect(mapStateToProps, { playCourse })(Play);
