import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Form,
  Input,
  Body,
  Text,
  Button,
  Item,
  Label,
  View,
} from "native-base";
import { connect } from "react-redux";
import { TextInput } from "react-native";
import LogOut from ".././LogoutButton";
import { Icon } from "native-base";

import * as actionCreators from "../../Store/actions";

class UpdateProfile extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "تحديث معلوماتي",
      headerRight: <LogOut/>,
      headerLeft:null
    };
  };
  state = {
    username: this.props.parent.user.username,
    first_name:this.props.parent.user.first_name,
    last_name:this.props.parent.user.last_name,
    email:this.props.parent.user.email
  };
  render() {
      return (
        <Content>
        <List>
          <ListItem style={{ borderBottomWidth: 0 }}>
            <Icon name={"closecircleo"} type={"AntDesign"} onPress={() =>this.props.navigation.goBack()} style={{fontSize: 40, marginLeft:20, marginTop:10, color:"black"}}/>
          </ListItem>
          <ListItem style={{ borderBottomWidth: 0 ,marginTop:110}}>
            <Body>
            <Form>
                <Item
                  
                  floatingLabel
                  // style={{
                  //   backgroundColor: "white",
                  // }}
                >
                <Label style={{textAlign: 'right'}}>اسم المستخدم</Label>
                  <Input
                    autoCorrect={false}
                    autoCapitalize="none"
                    onChangeText={username => this.setState({ username })}
                  />
                </Item>

                <Item
                  floatingLabel
                  // style={{ backgroundColor: "white", marginTop: 10 }}
                >
                  <Label style={{textAlign: 'right'}}>{this.state.first_name}</Label>
                  <Input
                    autoCorrect={false}
                    // secureTextEntry
                    autoCapitalize="none"
                    onChangeText={first_name => this.setState({ first_name })}
                    // placeholder={this.state.first_name}
                  />
                </Item>
                <Item
                  floatingLabel
                  // style={{ backgroundColor: "white", marginTop: 10 }}
                >
                 <Label style={{textAlign: 'right'}}>{this.state.last_name}</Label>
                  <Input
                    autoCorrect={false}
                    // secureTextEntry
                    autoCapitalize="none"
                    onChangeText={last_name => this.setState({ last_name })}
                    // placeholder={this.state.last_name}
                  />
                </Item>
                <Item
                  floatingLabel
                  // style={{ backgroundColor: "white", marginTop: 10 }}
                >
                <Label style={{textAlign: 'right'}}>{this.state.email}</Label>
                  <Input
                    autoCorrect={false}
                    // secureTextEntry
                    autoCapitalize="none"
                    onChangeText={email => this.setState({ email })}
                    // placeholder={this.state.email}
                  />
                </Item>
              </Form>
            </Body>
            </ListItem>
            <View style={{justifyContent: 'center',alignItems: 'center',flexDirection: 'row',}}>
            <Button rounded success
            onPress={() => this.props.login(this.state, this.props.navigation)}>
            <Text>حدث معلوماتي</Text>
          </Button>
            </View>
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
    updateParentWallet: wallet =>
      dispatch(actionCreators.updateParentWallet(wallet))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateProfile);
