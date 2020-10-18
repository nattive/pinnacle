import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Icon } from "semantic-ui-react";

export const CoachesSlide = () => {
    const extra = (
      <a>
        <Icon name="user" />
        16 Mentees
      </a>
    );

    return (
      <div className="mt-4">
        <Card
          image="/images/avatar/large/elliot.jpg"
          header={
              <>Coach name</>
          }
          meta="Joined 16th May, 2020"
          description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
          extra={extra}
        />
      </div>
    );
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(CoachesSlide)
