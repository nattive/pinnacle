import React from 'react'
import { useParams } from 'react-router-dom';
import ViewCourseClass from './ViewCourseClass';

export default function ViewCourse({ match }) {
    let { id } = useParams();

    return (
      <div>
        <ViewCourseClass course={id} match={match}/>
      </div>
    );
}
