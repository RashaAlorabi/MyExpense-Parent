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
  View
} from "native-base";
import { connect } from "react-redux";
import { Icon } from "native-base";
import { Constants, WebBrowser, LinearGradient } from "expo";
import * as actionCreators from "../../Store/actions";

class AddToWallet extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "أضافة للمحظة"
      // headerStyle:{backgroundColor:"#3DDDD5"},
    };
  };
  state = {
    wallet: ""
  };
  _handlePressButtonAsync = async (parentWallet, parentID) => {
    let result = await WebBrowser.openAuthSessionAsync(
      `http://172.20.10.2:30/api/parent/add/to/wallet/${parentWallet}/${parentID}/`,
      "http://172.20.10.2:30/api/parent/profile/"
    );
    this.setState({ result });
  };
  render() {
    let parent = this.props.parent;
    return (
      <LinearGradient
        colors={["#72B7E2", "#AE8BF1", "#3DDDD5"]}
        style={{ width: "100%", height: "100%" }}
      >
        <Content>
          <List>
            <ListItem style={{ borderBottomWidth: 0, marginTop: 200 }}>
              <Body>
                <Form style={{ backgroundColor: "rgba(255, 255, 255,0.4)" }}>
                  <Item
                    floatingLabel
                    // style={{ backgroundColor: "white", marginTop: 10 }}
                  >
                    <Label
                      style={{
                        textAlign: "right",
                        color: "black",
                        fontSize: 20,
                        marginRight: 10,
                        
                      }}
                    >
                      اضف مبلغ
                    </Label>
                    <Input
                      autoCorrect={false}
                      // secureTextEntry
                      autoCapitalize="none"
                      onChangeText={wallet => this.setState({ wallet })}
                      // placeholder={this.state.email}
                    />
                  </Item>
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "row",
                      marginTop:10,
                      marginBottom:10
                    }}
                  >
                    <Button
                      bordered
                      light
                      onPress={() =>
                        this._handlePressButtonAsync(
                          this.state.wallet,
                          parent.id
                        )
                      }
                    >
                      <Icon
                        name={"md-add-circle-outline"}
                        type={"Ionicons"}
                        style={{ color: "black", fontSize: 30 }}
                      />
                    </Button>
                  </View>
                </Form>
              </Body>
            </ListItem>
          </List>
        </Content>
      </LinearGradient>
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
)(AddToWallet);
