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
class ItemList extends Component {
  async componentDidMount(){
    let items = this.props.student.not_allowed.map(item => item.id)
    await this.props.setCheckedItem(items)
  }
  state = {
    checked: false,
    checkedItems: this.props.checkedItems
  };

  addItems = item => {
    this.props.addCheckedItem(item)
  };

  removeItems = item => {
    this.props.rmCheckedItem(item)
  };

  render() {
    let student = this.props.student;
    const items = this.props.items;
    itemsList = items.map(item => (
      <ItemRow
        key={item.id}
        item={item}
        not_allowed={student.not_allowed}
        addItems={this.addItems}
        removeItems={this.removeItems}
      />
    ));
    return (
      <Content style={{backgroundColor:"rgba(255, 255, 255,0.4)"}}>
        {itemsList}
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  notAlowedItems: state.ParentReducer.notAlowedItems,
  checkedItems : state.ParentReducer.checkedItems
});

const mapDispatchToProps = dispatch => ({
  onFetchNotAlowedItems: (items, student) =>
    dispatch(actionCreators.notAlowedItems(items, student)),
  fetchNotAlowedItems: items =>
    dispatch(actionCreators.fetchNotAlowedItems(items)),
  rmCheckedItem: item => dispatch(actionCreators.rmCheckedItem(item)),
  addCheckedItem: item => dispatch(actionCreators.addCheckedItem(item)),
  setCheckedItem: items => dispatch(actionCreators.setCheckedItem(items))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList);
