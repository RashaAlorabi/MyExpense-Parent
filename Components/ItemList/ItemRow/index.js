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
class ItemRow extends Component {
  componentDidMount() {
    let itemID = this.props.not_allowed.find(
      item => item.id === this.props.item.id
    );
    console.log("id ==> ", itemID);
    if (itemID) {
      this.setState({ checked: true });
    }
  }
  state = {
    checked: false
  };
  render() {
    let item = this.props.item;

    return (
      <View>
        <Text>{item.name}</Text>
        <CheckBox
          checked={this.state.checked}
          onPress={() => {
            !this.state.checked
              ? this.props.addItems(item)
              : this.props.removeItems(item);
            this.setState({ checked: !this.state.checked });
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  notAlowedItems: state.ParentReducer.notAlowedItems
});

export default connect(
  mapStateToProps,
  null
)(ItemRow);
