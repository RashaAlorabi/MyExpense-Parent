import React, { Component } from "react";
import ItemList from "../ItemList";
import {Tab} from "native-base";
class CategoryRItem extends Component {
  render() {
    let category = this.props.category;
    let items = this.props.items
    let itemsByCategory = items.map(item => item.category.name === category && item)
    return (
      <Tab heading={category}>
        <ItemList student={student} items={itemsByCategory} />
      </Tab>
    );
  }
}

export default CategoryRItem;
