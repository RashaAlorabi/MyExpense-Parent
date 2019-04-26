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
  Image,
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
      <CardItem
        button
        onPress={() =>
          this.props.navigation.navigate("StudentDetail", {
            student: student
          })
        }
      >
        <Left>
          <Thumbnail source={{ uri: student.image }} />
          <Body>
            <Text> {student.name}</Text>
          </Body>
        </Left>
      </CardItem>
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
