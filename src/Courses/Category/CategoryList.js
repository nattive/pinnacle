import React, { Component } from "react";
import "./Category.css";
import { Divider, CssBaseline } from "@material-ui/core";
import { connect } from "react-redux";
import { fetchMainCategory } from "../../Actions/courseAction";
class CategoryList extends Component {
  componentDidMount() {
    this.props.fetchMainCategory();
  }

  render() {
    const { mainCategory } = this.props;
    return (
      <div>
        <ul className="category-list container-fluid bg-light" style={{overflowX: 'auto'}}>
          {mainCategory.length > 0
            ? mainCategory.map((item) => <li key={item.id}><a href="">{item.name}</a></li>)
            : null}
            <CssBaseline />
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  mainCategory: state.course.mainCategories,
});

const mapDispatchToProps = {
  fetchMainCategory: fetchMainCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
