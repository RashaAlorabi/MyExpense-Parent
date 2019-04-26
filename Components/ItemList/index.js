import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../Store/actions";
import {
  Thumbnail,
  Text,
  Button,
  Left,
  Body,
  Right,
  List,
  ListItem,
  Picker,
  Content,
  Spinner,
  Input,
  Image,
  View
} from "native-base";
import { CheckBox } from "react-native-elements";
import ItemRow from "./ItemRow";
import CategoryRow from "../CategoryRow";
class ItemList extends Component {
  //   async componentDidMount() {
  //     let studentORder = this.props.student;
  //     if (studentORder.not_allowed) {
  //       let xItemsID = studentORder.not_allowed.map(item => item.id);
  //       await this.props.fetchNotAlowedItems(xItemsID);
  //     }
  //   }
  state = {
    checked: false,
    checkedItems: this.props.student.not_allowed.map(item => item.id)
  };

  addItems = item => {
    console.log("item =========================================>", item);
    this.setState({ checkedItems: this.state.checkedItems.concat(item.id) });
  };

  removeItems = item => {
    console.log("item =========================================>", item);
    this.setState({
      checkedItems: this.state.checkedItems.filter(itemID => itemID !== item.id)
    });
  };

  render() {
    let student = this.props.student;
    const items = this.props.student.school.items;
    let itemsList;
    let CategoriesList = [];
    let itemsCategories;
    CategoriesList = items.map(item => item.category.name);

    let newCategoriesList = CategoriesList.filter(
      (v, i, a) => a.indexOf(v) === i
    );
    console.log(newCategoriesList, "newCategoriesList--------------");
    itemsList = items.map(item => (
      <ItemRow
        key={item.id}
        item={item}
        not_allowed={student.not_allowed}
        addItems={this.addItems}
        removeItems={this.removeItems}
      />
    ));

    itemsCategories = newCategoriesList.map(category => (
      <CategoryRow key={category} category={category} />
    ));
    console.log(itemsCategories, "itemsCategories------------------");
    return (
      <Content>
        <View>{itemsCategories}</View>
        {itemsList}
        <Button
          onPress={() =>
            this.props.onFetchNotAlowedItems(
              this.state.checkedItems,
              student.id
            )
          }
        >
          <Text>SEND</Text>
        </Button>
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  notAlowedItems: state.ParentReducer.notAlowedItems
});

const mapDispatchToProps = dispatch => ({
  onFetchNotAlowedItems: (items, student) =>
    dispatch(actionCreators.notAlowedItems(items, student)),
  fetchNotAlowedItems: items =>
    dispatch(actionCreators.fetchNotAlowedItems(items))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList);
