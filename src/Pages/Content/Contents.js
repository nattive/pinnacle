import React, { Component } from "react";
import image from "../../Assets/img/blog/single_blog_2.png";
import { getResources } from "../../Actions/resourceAction";
import { connect } from "react-redux";
import { Skeleton } from "@material-ui/lab";
import Parse from "html-react-parser";
import { Link } from "react-router-dom";

class Contents extends Component {
  componentDidMount() {
    this.props.getResources();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.isGettingFRs ? (
            <React.Fragment>
              <article className="blog_item">
                <div className="blog_item_img">
                  <Skeleton width={750} height={375} animation="wave" />
                </div>
                <div className="blog_details">
                  <a className="d-inline-block" href="single-blog.html">
                    <h2>
                      <Skeleton variant="text" />
                      <Skeleton variant="text" />
                      <Skeleton variant="text" />
                      <Skeleton variant="text" />
                    </h2>
                  </a>
                  <p>
                    <Skeleton variant="text" />
                  </p>
                  <ul className="blog-info-link">
                    <Skeleton variant="text" />
                  </ul>
                </div>
              </article>
            </React.Fragment>
          ) : this.props.FRs.length > 0 ? (
            this.props.FRs.map((Content) => (
              <React.Fragment>
                <div className="col-md-6">
                  <div className="course">
                    <div className="course_image">
                      <img src={Content.banner} alt="" />
                    </div>
                    <div className="course_body">
                      {/* <div className="course_header d-flex flex-row align-items-center justify-content-start">
                        <div className="course_tag">
                          <a href="#">New</a>
                        </div>
                        <div className="course_price ml-auto">
                          Price: <span>$35</span>
                        </div>
                      </div> */}
                      <div className="course_title">
                        <h3>
                          <a href="courses.html">{Content.title}</a>
                        </h3>
                      </div>
                      <div className="course_text">{Content.subtitle}</div>
                      <div className="course_footer d-flex align-items-center justify-content-start">
                        {/* <div className="course_author_image">
                          <img src="images/course_author_2.jpg" alt="" />
                        </div> */}
                        <div className="course_author_name">
                          By{" "}
                          <a href="#">{Content.admin && Content.admin.name}</a>
                        </div>
                        <div className="course_sales ml-auto">
                          <span>{Content.mediaFiles.length}</span> downloadable file
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))
          ) : (
            <p>no post</p>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    isGettingFRs: state.resource.isGettingFRs,
    FRs: state.resource.FRs,
    FR_Error: state.resource.FR_Error,
  };
}

export default connect(mapStateToProps, { getResources })(Contents);
