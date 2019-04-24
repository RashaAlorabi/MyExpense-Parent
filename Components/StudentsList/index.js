import React, { Component } from "react";
import { connect } from "react-redux";

import StudentRow from "./StudentRow";
import * as actionCreators from "../../Store/actions";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Text
} from "native-base";

class StudentsList extends Component {
  componentDidMount() {
    this.props.fetchParentProfile();
  }

  render() {
    let studentRow;
    if (this.props.loading) {
      studentRow = <Text />;
    } else {
      console.log("studentRow", this.props.parent.child);
      studentRow = this.props.parent.child.map(student => (
        <StudentRow key={student.id} student={student} />
      ));
    }

    return (
      <Card>
        <CardItem>
          <Body>{studentRow}</Body>
        </CardItem>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.ParentReducer.loading,
  parent: state.ParentReducer.parent
});

const mapDispatchToProps = dispatch => ({
  fetchParentProfile: () => dispatch(actionCreators.fetchParentProfile())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentsList);
