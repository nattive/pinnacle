import React, { Component } from 'react'
import { connect } from 'react-redux'

const ResourceView = () => {
    return (
        <div>
          {'  <Resource Slide />'}
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ResourceView);
