import React, { Component } from "react";
import { connect } from "react-redux";
import { withNavigation } from "react-navigation";
import OrderHistoryCartItemRow from "./orderHistoryCartItemRow";
import {Collapse, CollapseHeader, CollapseBody} from "accordion-collapse-react-native";

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
  Left,
  Accordion,
  Row,
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
        <Collapse style={{borderBottomWidth:1,borderTopWidth:1}}>
          <CollapseHeader style={{flexDirection:'row',alignItems:'center',padding:10,backgroundColor:'#E6E6E6', height: 80}}>
            <Left>
              <Text>{`${dateYear} ${dateMonth} ${dateDay}`}</Text>
            </Left>
            <Right>
              <Text>{orderHistory.total}</Text>
            </Right>
          </CollapseHeader>
          <CollapseBody style={{alignItems:'center',justifyContent:'center',flexDirection:'row',backgroundColor:'#EDEDED',}}>
            {orderhistorycartitemRow}
          </CollapseBody>
        </Collapse>
    );
  }
}

export default OrderHistoryRow;
