import _ from 'lodash'
import React, { Component } from 'react'
import { Search, Grid, Header, Segment } from 'semantic-ui-react'
import { fetchMainCategory, fetchCourses, allCourses } from "../Actions/courseAction"
import { connect } from "react-redux"

const initialState = { isLoading: false, results: [], value: '' }

class SearchCourse extends Component {
    
    state = initialState

    handleResultSelect = (e, { result }) => this.setState({ value: result.title })

    handleSearchChange = (e, { value }) => {
        this.setState({ isLoading: true, value })

        setTimeout(() => {
            if (this.state.value.length < 1) return this.setState(initialState)

            const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
            const isMatch = (result) => re.test(result.title)

            this.setState({
                isLoading: false,
                results: _.filter(this.props.courses, isMatch),
            })
        }, 300)
    }

    render() {
        const { isLoading, value, results } = this.state

        return (
            <Search
                fluid
                loading={isLoading}
                onResultSelect={this.handleResultSelect}
                onSearchChange={_.debounce(this.handleSearchChange, 500, {
                    leading: true,
                })}
                results={results}
                value={value}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    courses: state.course.ALL_courses.data,
});

const mapDispatchToProps = {
    fetchMainCategory,
    fetchCourses,
    allCourses
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchCourse);
