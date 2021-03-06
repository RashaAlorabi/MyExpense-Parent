import React, { Component } from "react";
import ItemList from "../ItemList";
import {Tab} from "native-base";
class CategoryRow extends Component {
  render() {
    let category = this.props.category;
    let items = this.props.items
    let itemsByCategory = items.map(item => item.category.name === category)
    console.log("category ==>", category)
    return (
      <Tab heading={` Tap ${category}`}>
        <ItemList student={student} items={itemsByCategory} />
      </Tab>
    );
  }
}

export default CategoryRow;
