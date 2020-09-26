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
                    <Item.Image src={course.banner} className='overlay'/>

                    <Item.Content>
                        <Item.Meta>
                            <span className='cinema'>{course.title}</span>
                        </Item.Meta>
                        <Item.Description>{course.subtitle} </Item.Description>
                        <Item.Extra>
                            <p>Difficulty: {course.course_difficulty}</p>
                        </Item.Extra>
                    </Item.Content>
                </Item>
            </Item.Group>
        )
    }
}
