import React, { Component, useEffect } from 'react'
import { connect } from 'react-redux'
import EnrolledCourseCard from "../EnrolledCourseCard";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import {
    getEnrolledCourse,
} from "../../Actions/courseAction";
import { useHistory, useRouteMatch } from 'react-router-dom';

/**
 * Displays List of all courses user has enrolled in
 * @param {courses, user} props 
 */
const EnrolledCarousel = (props) => {
    const history = useHistory()
    const {url} = useRouteMatch()
    useEffect(() => {
        props.getEnrolledCourse();
    }, [])
    return (
        <div>
            <div className="row">
                <OwlCarousel
                    className="owl-theme"
                    loop
                    margin={10}
                    nav
                >
                    {props.ENROLLED_courses && props.ENROLLED_courses.length > 0 ? (
                        props.ENROLLED_courses.map((item, key) => (
                            <div key={key}>
                                <EnrolledCourseCard course={item} url={url} history={history} />
                            </div>
                        ))
                    ) : (
                            <p>You are not following any course</p>
                        )}
                </OwlCarousel>
                
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    ENROLLED_courses: state.course.ENROLLED_courses,
    user: state.auth.user,
})

const mapDispatchToProps = {
    getEnrolledCourse,

}

export default connect(mapStateToProps, mapDispatchToProps)(EnrolledCarousel)
