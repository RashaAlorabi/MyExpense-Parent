import React, { Component } from "react";
import { connect } from "react-redux";
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
class CategoryRow extends Component {
  render() {
    let category = this.props.category;
    console.log("category ==> ", category);
    return (
      <View>
        <Text>{category.name}</Text>
      </View>
    );
  }
}

export default CategoryRow;
