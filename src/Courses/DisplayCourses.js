import React from "react";
import { ListItem, Avatar, Typography } from "@material-ui/core";
import { BaseUrl } from "../Patials/BaseUrl";
import ReactPlaceholder from "react-placeholder/lib";

export default function DisplayCourses(props) {
  const { courses } = props;
  return (
    <div>
      {courses ? (
        courses.length > 0 ? (
          courses.map((item) => (
            <ListItem button key={item.id}>
              {/* <ListItemIcon>
              
            </ListItemIcon> */}
              <Avatar variant="square" src={`${BaseUrl}/${item.banner}`} />
              <Typography className={props.styles.listText}>
                {item.title}
              </Typography>
            </ListItem>
          ))
        ) : (
          <p className="text-muted small p-2">No Courses Uploaded yet</p>
        )
      ) : (
        <div className="mx-auto">
          <div className="w-100">
            <ReactPlaceholder type="media" showLoadingAnimation />
          </div>
        </div>
      )}
    </div>
  );
}
