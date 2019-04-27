import React, { Component } from "react";
import { connect } from "react-redux";
import { withNavigation } from "react-navigation";
import {
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
  View,
  Card,
  CardItem,
  Thumbnail,
  Icon
} from "native-base";
import * as actionCreators from "../../../Store/actions";

class StudentRow extends Component {
  componentDidMount() {
    //  this.props.fetchParentStudent();
  }

  render() {
    let student = this.props.student;
    return (
      <Card style={{ flex: 0 }}>
        <CardItem
          button
          onPress={() =>
            this.props.navigation.navigate("StudentDetail", {
              student: student
            })
          }
        >
          <View
            style={{
              alignContent: "flex-start",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center"
            }}
          >
            <Left />
            <Text style={{ fontSize: 20, marginTop: 13 }}> {student.name}</Text>
            <Right>
              <Thumbnail source={{ uri: student.image }} />
            </Right>
          </View>
        </CardItem>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.ParentReducer.loading
});

const mapDispatchToProps = dispatch => ({
  fetchParentStudent: () => dispatch(actionCreators.fetchParentStudent())
});

export default withNavigation(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(StudentRow)
);
