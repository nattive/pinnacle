import React from "react";
import PlayCourse from "../../Courses/PlayCourse";
import HeadBar from "../../Courses/HeadBar";
import { useHistory } from "react-router-dom";

export default function Preview(props) {
    const history = useHistory()
  return (
    <div>
      <HeadBar />
      <PlayCourse history={history} {...props} />
    </div>
  );
}
