import React, { Component } from "react";
import { connect } from "react-redux";
import { withNavigation } from "react-navigation";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  View,
  ListItem,
  Right,
  Left
} from "native-base";

class OrderHistoryCartItemRow extends Component {
  render() {
    let orderHistoryCartItemRow = this.props.orderhistorycartitemRow;
    return (
        <ListItem>
            <Left>
                <Text>{orderHistoryCartItemRow.item.name}</Text>
            </Left>
            <Right>
                <Text>{`${orderHistoryCartItemRow.item.price} X ${orderHistoryCartItemRow.quantity}`}</Text>
            </Right>
        </ListItem>
    );
  }
}

export default OrderHistoryCartItemRow;
