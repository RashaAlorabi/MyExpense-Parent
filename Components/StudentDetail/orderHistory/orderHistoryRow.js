import React, { Component } from "react";
import { connect } from "react-redux";
import { withNavigation } from "react-navigation";
import OrderHistoryCartItemRow from "./orderHistoryCartItemRow"
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  View,
  List,
  ListItem,
  Right,
  Left
} from "native-base";

class OrderHistoryRow extends Component {
  render() {
    let orderHistory = this.props.orderHistory;
    let orderhistorycartitemRow = []
    if (orderHistory.cart_items){
        orderhistorycartitemRow = orderHistory.cart_items.map(cart_item => <OrderHistoryCartItemRow orderhistorycartitemRow={cart_item} key={cart_item.id}/>)
    }
    let dateYear = orderHistory.order_date.substring(0, 4)
    let dateMonth = orderHistory.order_date.substring(5, 7)
    let dateDay = orderHistory.order_date.substring(8, 10)
    
    return (
        <List>
            {orderhistorycartitemRow}
            <ListItem>
                <Left>
                    <Text>{`السنة ${dateYear} الشهر ${dateMonth} اليوم ${dateDay}`}</Text>
                </Left>
                <Right>
                    <Text>{orderHistory.total}</Text>
                </Right>
            </ListItem>
        </List>
    );
  }
}

export default OrderHistoryRow;
