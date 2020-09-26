import React from 'react'
import { Card, Icon, Button } from 'semantic-ui-react'
import { Typography } from '@material-ui/core'
import ShowRating from "../General Components/ShowRating";
import { Link } from 'react-router-dom';
import { Image, Video } from 'cloudinary-react';
import { cloudName } from '../Patials/BaseUrl';

const SingleCourseItem = (props) => (
  
  <Card
    image={(
      <Image
        style={{ width: '100%', height: '150px' }}
        cloudName={cloudName}
        publicId={props.course.image_public_id}
        crop="scale"
        width="auto"
        responsive
      />
    )}
    header={
      (
        <Typography variant='h6' style={{textTransform: 'capitalize'}}>{props.course.title}</Typography>
      )
    }
    meta={props.course.subtitle}
    description={`Category: ${props.course.SubCategory && props.course.SubCategory.name} |
     By: ${props.course.tutor && props.course.tutor.user && props.course.tutor.user.name}`}
    extra={(
      <>
        <Typography variant="overline" className="text-danger pull-right">
          {props.course.isFree ? "Free" : props.course.price}
        </Typography>
        <div className="d-flex justify-content-start">
          <Button style={{ backgroundColor: '#fff' }} icon='share' />
        <Button style={{backgroundColor: '#fff'}} icon='heart outline' />
          <Button style={{ backgroundColor: '#fff' }} icon='cart arrow down' />
          <Button style={{ backgroundColor: '#fff' }} as={Link} to={`/learn/course/${props.course.slug}`} >View Course</Button>
        </div>
        
      </>
    )}
  />
)

export default SingleCourseItem