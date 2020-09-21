import React, { Component } from "react";
import Comment from "./Review";
import { BaseUrl } from "../../Patials/BaseUrl";
import { connect } from "react-redux";
import { fetchReview, deleteReview } from "../../Actions/ReviewAction";
import { CircularProgress } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
class Reviews extends Component {
    constructor() {
        super();
        // this.getComments = this.getComments.bind(this);
        this.state = {
            reviews: {},
            isFetching: true,
            course_id: null
        };
    }

    async fetchData(url) {
        const response = await fetch(url);
        let data = await response.json();
        return data;
    }
   
    
    componentWillReceiveProps(newProps) {
        if (newProps.reviews) {
            this.setState({ reviews: newProps.reviews, isFetching: false });
            console.log(newProps.reviews);

        }
    }
    render() {
        const { comments, isFetching } = this.state; {
            console.log(this.state.reviews);
        }
        return this.state.isFetching === true ? (<Skeleton />
        ) : (<Comment comments={this.state.reviews} {...this.props}/>
            );
    }
}

const mapStateToProps = (state) => ({
    reviews: state.reviews.showedCourseReview,
    isLoadingReview: state.reviews.isLoadingReview,
});

const mapDispatchToProps = {
    fetchReview,
    deleteReview
};

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);