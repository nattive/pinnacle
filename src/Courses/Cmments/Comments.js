import React, { Component } from "react";
import Comment from "./Comment";
import { BaseUrl } from "../../Patials/BaseUrl";
import { connect } from "react-redux";
import { fetchReview, deleteReview } from "../../Actions/ReviewAction";
import { CircularProgress } from "@material-ui/core";
class Comments extends Component {
  constructor() {
    super();
    this.getComments = this.getComments.bind(this);
  }
  state = {
    reviews: {},
    isFetching: true,
  };

  async fetchData(url) {
    const response = await fetch(url);
    let data = await response.json();
    return data;
  }

  getComments() {}
  componentDidMount() {
    this.props.fetchReview(this.props.course_id);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.reviews) {
      this.setState({ reviews: newProps.reviews, isFetching: false });
      console.log(newProps.reviews);
      
    }
  }
  render() {
    const { comments, isFetching } = this.state;
    {
      console.log(this.state.reviews);
    }
    return this.state.isFetching === true ? (
      <small className="text-muted m-3">...loading</small>
    ) : (
      <Comment comments={this.state.reviews} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
