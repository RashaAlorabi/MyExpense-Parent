import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../Store/actions";
import { TextInput } from "react-native";
import ItemList from "../ItemList";
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

class StudentDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("student").name
    };
  };
  async componentDidMount() {
    let studentORder = this.props.navigation.getParam("student");
    if (studentORder.orders) {
      console.log("studentORder ===>", studentORder);
      let OrderHistory = studentORder.orders.filter(order => order.paid);
      this.props.saveOrderHistory(OrderHistory);
    }
    // if (studentORder.not_allowed) {
    //   let xItemsID = studentORder.not_allowed.map(item => item.id);
    //   await this.props.fetchNotAlowedItems(xItemsID);
    // }
  }
  state = {
    limit: null
  };

  render() {
    let student = this.props.navigation.getParam("student");
    console.log(student, "student parent");
    return (
      <Content>
        <List>
          <ListItem>
            <Text
              style={{
                textAlign: "center",
                fontSize: 19,
                fontWeight: "bold",
                padding: 10
              }}
            >
              {student.name}
            </Text>
          </ListItem>
          <ListItem>
            <Text
              style={{
                textAlign: "center",
                fontSize: 19,
                fontWeight: "bold",
                padding: 10
              }}
            >
              {student.grade}
            </Text>
          </ListItem>
          <ListItem>
            <Text
              style={{
                textAlign: "center",
                fontSize: 19,
                fontWeight: "bold",
                padding: 10
              }}
            >
              Health
            </Text>
            <Text>{student.health}</Text>
          </ListItem>
          <ListItem>
            <Text
              style={{
                textAlign: "center",
                fontSize: 19,
                fontWeight: "bold",
                padding: 10
              }}
            >
              limil {this.state.limit ? this.state.limit : student.limit}
            </Text>
            <TextInput
              style={{
                width: 40,
                height: 40,
                borderColor: "gray",
                borderWidth: 1
              }}
              value={this.state.limit}
              onChangeText={limit => this.setState({ limit })}
            />

            <Button
              onPress={() => {
                this.props.updateStudentLimit(student, this.state.limit);
                this.setState({ state: this.state });
              }}
            >
              <Text>update limit</Text>
            </Button>
          </ListItem>
          <ItemList student={student} />
          <ListItem>
            <Button
              onPress={() =>
                this.props.navigation.navigate("StudentOrderHistory")
              }
            >
              <Text>طلبات {student.name}</Text>
            </Button>
          </ListItem>
        </List>
      </Content>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.ParentReducer.loading,
    parent: state.ParentReducer.parent
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchParentProfile: () => dispatch(actionCreators.fetchParentProfile()),
    updateStudentLimit: (studentDate, limit) =>
      dispatch(actionCreators.updateStudentLimit(studentDate, limit)),
    saveOrderHistory: OrderHistory =>
      dispatch(actionCreators.saveOrderHistory(OrderHistory)),
    fetchNotAlowedItems: items =>
      dispatch(actionCreators.fetchNotAlowedItems(items))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentDetail);
