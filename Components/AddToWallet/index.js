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
import { Icon } from "native-base";
import { Constants, WebBrowser } from 'expo';

import * as actionCreators from "../../Store/actions";

class AddToWallet extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "أضافة للمحظة",
    };
  };
  state = {
    wallet: "",
  };
  _handlePressButtonAsync = async (parentWallet, parentID) => {
    let result = await WebBrowser.openAuthSessionAsync(`http://127.0.0.1:8000/api/parent/add/to/wallet/${parentWallet}/${parentID}/`, "http://127.0.0.1:8000/api/parent/profile/");
    this.setState({ result });
  };
  render() {
    let parent = this.props.parent;
      return (
        <Content>
        <List>
          <ListItem style={{ borderBottomWidth: 0 ,marginTop:200}}>
            <Body>
            <Form>
                <Item
                  floatingLabel
                  // style={{ backgroundColor: "white", marginTop: 10 }}
                >
                <Label style={{textAlign: 'right'}}>أضف المبلغ</Label>
                  <Input
                    autoCorrect={false}
                    // secureTextEntry
                    autoCapitalize="none"
                    onChangeText={wallet => this.setState({ wallet })}
                    // placeholder={this.state.email}
                  />
                </Item>
              </Form>
            </Body>
            </ListItem>
            <View style={{justifyContent: 'center',alignItems: 'center',flexDirection: 'row',}}>
            <Button rounded success
            onPress={() => this._handlePressButtonAsync(this.state.wallet, parent.id)}>
            <Text>أضف</Text>
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
)(AddToWallet);
