import React from "react";
// import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Rating, Label } from 'semantic-ui-react'
 function ShowRating(props) {
  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating icon='star' size='large' rating={props.rating} maxRating={5} className='p-1' />
        <Label >{`${props.no_rated_user} Ratings `}</Label>
      </Box>
    </div>
  );
}
ShowRating.propTypes = {
  rating: String
};

export default ShowRating