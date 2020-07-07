import React from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default function ShowRating(props) {
  // const { rating_percentage, total_rating } = props.course;
  // //   const [value, setValue] = React.useState(2);
  // var value;
  // if (rating_percentage > 90) {
  //   value = 5;
  // } else if (rating_percentage > 80 && rating_percentage < 90) {
  //   value = 4.5;
  // } else if (rating_percentage > 70 && rating_percentage < 80) {
  //   value = 4;
  // } else if (rating_percentage > 60 && rating_percentage < 70) {
  //   value = 3.5;
  // } else if (rating_percentage > 50 && rating_percentage < 60) {
  //   value = 3;
  // } else if (rating_percentage > 40 && rating_percentage < 50) {
  //   value = 2.5;
  // } else if (rating_percentage > 30 && rating_percentage < 40) {
  //   value = 2;
  // } else if (rating_percentage > 20 && rating_percentage < 30) {
  //   value = 1.5;
  // } else if (rating_percentage > 10 && rating_percentage < 20) {
  //   value = 1;
  // } else if (rating_percentage > 1 && rating_percentage < 10) {
  //   value = 0.5;
  // } else {
  //   value = 0;
  // }
  // var ratedDecimal = (rating_percentage / (total_rating * 100)) * 100;
  return (
    <div>
      <Box component="fieldset" borderColor="transparent">
        <Box
          component="fieldset"
          borderColor="transparent"
          className="align-items-center"
        >
          <Rating name="read-only" value={props.rating} readOnly />
          <Typography component="small" className="small text-muted p-2">
            {/* {rating_percentage === 0 ? 0 : ratedDecimal}/{total_rating} */}
          </Typography>
        </Box>
      </Box>
    </div>
  );
}
