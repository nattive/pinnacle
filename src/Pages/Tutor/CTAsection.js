import React from 'react'
import { Container, Typography, Button } from '@material-ui/core'
import { Link } from 'react-router-dom';

export default function CTAsection() {
    const button = {
        padding: '10px 50px',
        backgroundColor: '#000066',
        color: '#fff',
        borderRadius: 0
    }
    return (
      <Container>
        <div className="mx-auto mt-4 p-4">
          <Typography variant="h3" className="text-center heading-big mt-4">
            Become an instructor
          </Typography>
          <Typography variant="body1" className="text-center">
            Take the first into turning your skills into an avenue to reach
            learners in Africa
          </Typography>
          <div className="m-4 text-center">
            <Button
              variant="contained"
              style={button}
              to="teach/instructor/auth"
              component={Link}
            >
              Sign me up
            </Button>
          </div>
        </div>
      </Container>
    );
}
