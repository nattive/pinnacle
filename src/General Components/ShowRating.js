import React from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import StarBorderIcon from "@material-ui/icons/StarBorder";
// import { Rating, Label } from "semantic-ui-react";
function ShowRating(props) {
  return (
    <div style={{dislay: 'block'}}>
      <Rating
        // icon={}
        size="medium"
        readOnly
        defaultValue={props.rating}
        maxRating={5}
        className="p-1"
      />
      {/* <small>/{`${props.no_rated_user} Ratings `}</small> */}
    </div>
  );
}
ShowRating.propTypes = {
  rating: String,
  no_rated_user: Number
};

export default ShowRating;
