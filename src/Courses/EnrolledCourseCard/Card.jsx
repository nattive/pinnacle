import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Icon, Image, Item, Label } from 'semantic-ui-react'
import { Link } from '@material-ui/core'


export default class Card extends Component {
    static propTypes = {

    }
    
    render() {
        const {history, course } = this.props
        console.log(this.props)
        return (
            <Item.Group style={{padding: 10, cursor: 'pointer'}}>
                <Item onClick={() => history.push('/learn/play/' + course.slug)}>
                    <Item.Image src={this.props.banner} className='overlay'/>

                    <Item.Content>
                        <Item.Meta>
                            <span className='cinema'>{this.props.title}</span>
                        </Item.Meta>
                        <Item.Description> Become Google Analytics Certified to Land a Job, Get Promoted or Start a New Career in Digital Marketing! 2020 Guide </Item.Description>
                        <Item.Extra>
                            <p>Difficulty: {this.props.course_difficulty}</p>
                        </Item.Extra>
                    </Item.Content>
                </Item>
            </Item.Group>
        )
    }
}
