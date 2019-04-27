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
  View,
  Text
} from "native-base";
import {LinearGradient} from 'expo';

class StudentsList extends Component {
  
  componentDidMount() {
    this.props.fetchParentProfile();
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: "أبنائي",
      // headerStyle:{backgroundColor:"#3DDDD5"},
    };
  };
  render() {
    let studentRow;
    if (this.props.loading) {
      studentRow = <Text />;
    } else {
      studentRow = this.props.parent.child.map(student => (
        <StudentRow key={student.id} student={student} />
      ));
    }

    return (
      <LinearGradient
        colors={['#72B7E2', '#AE8BF1', '#3DDDD5']}
        style={{ width:"100%", height:"100%"}}>           
        <View style={{marginTop:10}}>
          {studentRow}
        </View>
      </LinearGradient>
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
