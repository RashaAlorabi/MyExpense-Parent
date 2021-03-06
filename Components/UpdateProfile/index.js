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
  Toast,
  Root
} from "native-base";
import { connect } from "react-redux";
import { TextInput } from "react-native";
import LogOut from ".././LogoutButton";
import { Icon } from "native-base";
import { LinearGradient } from "expo";
import * as actionCreators from "../../Store/actions";

class UpdateProfile extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "تحديث معلوماتي",
      headerRight: <LogOut />,
      headerLeft: null
      // headerStyle:{backgroundColor:"#3DDDD5"},
    };
  };
  state = {
    first_name: this.props.parent.user.first_name,
    last_name: this.props.parent.user.last_name,
    email: this.props.parent.user.email,
    showToast: false
  };

  onUpdate = (userData, userID) => {
    this.props.updateParentProfile(userData, userID);
    Toast.show({
      text: "تم الحفظ التعديلات",
      duration: 3000
    });
  };

  render() {
    return (
      <Root>
        <LinearGradient
          colors={["#72B7E2", "#AE8BF1", "#3DDDD5"]}
          style={{ width: "100%", height: "100%" }}
        >
          <Content padder>
            <List>
              <ListItem style={{ borderBottomWidth: 0 }}>
                <Icon
                  name={"closecircleo"}
                  type={"AntDesign"}
                  onPress={() => this.props.navigation.goBack()}
                  style={{
                    fontSize: 40,
                    marginLeft: 20,
                    marginTop: 10,
                    color: "black"
                  }}
                />
              </ListItem>
              <ListItem style={{ borderBottomWidth: 0, marginTop: 110 }}>
                <Body>
                  <Form style={{ backgroundColor: "rgba(255, 255, 255,0.4)" }}>
                    <Item
                      floatingLabel
                      // style={{
                      //   backgroundColor: "white",
                      // }}
                    >
                      <Label
                        style={{
                          textAlign: "right",
                          color: "black",
                          fontSize: 20,
                          marginRight: 10
                        }}
                      >
                        اسم المستخدم
                      </Label>
                      <Input
                        autoCorrect={false}
                        autoCapitalize="none"
                        onChangeText={username => this.setState({ username })}
                        value={this.state.username}
                      />
                    </Item>

                    <Item
                      floatingLabel
                      // style={{ backgroundColor: "white", marginTop: 10 }}
                    >
                      <Label
                        style={{
                          textAlign: "right",
                          color: "black",
                          fontSize: 20,
                          marginRight: 10
                        }}
                      >
                        الاسم الأول
                      </Label>
                      <Input
                        autoCorrect={false}
                        // secureTextEntry
                        autoCapitalize="none"
                        onChangeText={first_name =>
                          this.setState({ first_name })
                        }
                        // placeholder={this.state.first_name}
                        style={{
                          marginTop: 10,
                          textAlign: "right",
                          marginRight: 10,
                          fontSize: 20
                        }}
                        value={this.state.first_name}
                      />
                    </Item>
                    <Item
                      floatingLabel
                      // style={{ backgroundColor: "white", marginTop: 10 }}
                    >
                      <Label
                        style={{
                          textAlign: "right",
                          color: "black",
                          fontSize: 20,
                          marginRight: 10
                        }}
                      >
                        الاسم الأخير
                      </Label>
                      <Input
                        autoCorrect={false}
                        style={{
                          marginTop: 10,
                          textAlign: "right",
                          marginRight: 10,
                          fontSize: 20
                        }}
                        autoCapitalize="none"
                        onChangeText={last_name => this.setState({ last_name })}
                        value={this.state.last_name}
                      />
                    </Item>
                    <Item
                      floatingLabel
                      // style={{ backgroundColor: "white", marginTop: 10 }}
                    >
                      <Label
                        style={{
                          textAlign: "right",
                          color: "black",
                          fontSize: 20,
                          marginRight: 10
                        }}
                      >
                        البريد الألكتروني
                      </Label>
                      <Input
                        autoCorrect={false}
                        // secureTextEntry
                        autoCapitalize="none"
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email}
                      />
                    </Item>
                  </Form>
                </Body>
              </ListItem>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row"
                }}
              >
                <Button bordered light style={{ fontSize: 50 }}>
                  <Icon
                    name={"save"}
                    type={"FontAwesome"}
                    onPress={() =>
                      this.onUpdate(this.state, this.props.parent.user.id)
                    }
                    style={{ color: "black", fontSize: 30 }}
                  />
                </Button>
              </View>
            </List>
          </Content>
        </LinearGradient>
      </Root>
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
    updateParentProfile: (userID, first_name, last_name, email) =>
      dispatch(
        actionCreators.updateParentProfile(userID, first_name, last_name, email)
      )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateProfile);
