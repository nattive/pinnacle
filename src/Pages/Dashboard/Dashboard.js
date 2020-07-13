import React, { Component } from 'react'
import HeadBar from '../../Courses/HeadBar'
import CategoryList from '../../Courses/Category/CategoryList'
import TitleHeader from '../../Courses/TitleHeader'
import ListCourses from '../../Courses/ListCourses'
export default class Dashboard extends Component {
    render() {
        return (
          <>
            <HeadBar />
            <CategoryList />
            <TitleHeader title="Pinnacle Ulearn" />
            <ListCourses />
          </>
        );
    }
}
