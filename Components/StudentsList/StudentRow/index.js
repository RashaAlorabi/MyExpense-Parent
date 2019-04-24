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
  View
} from "native-base";
import * as actionCreators from "../../../Store/actions";

class StudentRow extends Component {
  componentDidMount() {
    //  this.props.fetchParentStudent();
  }

  render() {
    let student = this.props.student;
    return (
      <Card>
        <CardItem
          button
          onPress={() =>
            this.props.navigation.navigate("StudentDetail", {
              student: student
            })
          }
        >
          <Text>{student.name}</Text>
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
