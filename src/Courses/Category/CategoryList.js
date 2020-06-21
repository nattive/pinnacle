import React, { Component } from "react";
import './Category.css'
import { Divider } from "@material-ui/core";
export default class CategoryList extends Component {
  render() {
    return (
      <div>
        <ul className="category-list container">
          <li> Test </li>
          <li> Test </li>
        </ul>
        <Divider />
      </div>
    );
  }
}
