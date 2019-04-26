import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../Store/actions";
import { Icon } from "native-base";
import {
  Text,
  Button,
  View,
  List,
  ListItem,
  Form,
  Input,
  Item,
  Content,
  Header
} from "native-base";
import { withNavigation } from "react-navigation";

class LogOut extends Component {
  componentDidMount() {
    //this.props.checkForToken();
  }
  state = {
    username: "",
    password: ""
  };

  render() {
    // if (this.props.user) {
    //   this.props.navigation.replace("ParentProfile");
    // }
    return ( 
        
        <Icon name={"logout"} type={"AntDesign"} onPress={() => this.props.logout(this.props.navigation)} style={{fontSize: 30, color: 'red', marginRight:20}}/>
               
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.authReducer.user
  };
};

const mapDispatchToProps = dispatch => ({
    logout: (navigation) =>
    dispatch(actionCreators.logout(navigation)),
});
export default withNavigation(connect(
  mapStateToProps,
  mapDispatchToProps
)(LogOut));
