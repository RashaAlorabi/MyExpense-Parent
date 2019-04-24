import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../../Store/actions";
import { TextInput, } from "react-native";
// NativeBase Components
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
  Image
} from "native-base";
import OrderHistoryRow from "./orderHistoryRow"
class studentOrderHistory extends Component {
//   static navigationOptions = ({ navigation }) => {
//     return {
//     //   title: navigation.getParam("student").name
//     };
//   };
  state = {
    limit: null
  };

  render() {
    let OrderHistory = this.props.orderHistory
    let OrderHistoryObj =[]
    if (OrderHistory){
      OrderHistoryObj = OrderHistory.map(OrderHistory => <OrderHistoryRow orderHistory={OrderHistory} key={OrderHistory.id}/>)
    }
    return (
        <List>
          {OrderHistoryObj}
        </List>
    );
  }
}

const mapStateToProps = state => {
  return {
    orderHistory: state.ParentReducer.orderHistory
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchParentProfile: () => dispatch(actionCreators.fetchParentProfile()),
    updateStudentLimit: (studentDate, limit) =>
      dispatch(actionCreators.updateStudentLimit(studentDate, limit))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(studentOrderHistory);
