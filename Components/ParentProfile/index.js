import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  Button,
  Thumbnail
} from "native-base";
import { connect } from "react-redux";
import { TextInput } from "react-native";

import * as actionCreators from "../../Store/actions";

class ParentProfile extends Component {
  state = {
    wallet: ""
  };

  render() {
    let parent;
    if (this.props.loading) {
      return (parent = <Text />);
    } else {
      parent = this.props.parent;
      return (
        <Card>
          <CardItem>
            <Body>
              <CardItem>
                <Thumbnail source={{ uri: parent.image }} />
              </CardItem>

              <CardItem>
                <Text
                  style={{
                    marginHorizontal: 5,
                    borderRightWidth: 5,
                    borderColor: "black",
                    borderStyle: "dotted",
                    borderRadius: 1
                  }}
                >
                  First name {parent.user.first_name}
                </Text>
              </CardItem>
              <CardItem>
                <Text
                  style={{
                    marginHorizontal: 5,
                    borderRightWidth: 5,
                    borderColor: "black",
                    borderStyle: "dotted",
                    borderRadius: 1
                  }}
                >
                  Last name {parent.user.last_name}
                </Text>
              </CardItem>
              <CardItem>
                <Text
                  style={{
                    marginHorizontal: 5,
                    borderRightWidth: 5,
                    borderColor: "black",
                    borderStyle: "dotted",
                    borderRadius: 1
                  }}
                >
                  Username {parent.user.username}
                </Text>
              </CardItem>
              <CardItem>
                <Text
                  style={{
                    marginHorizontal: 5
                  }}
                >
                  Email {parent.user.email}
                </Text>
              </CardItem>
              <CardItem>
                <Text
                  style={{
                    marginHorizontal: 5
                  }}
                >
                  wallet {parent.wallet}
                </Text>
              </CardItem>
              <CardItem>
                <TextInput
                  style={{
                    width: 40,
                    height: 40,
                    borderColor: "gray",
                    borderWidth: 1
                  }}
                  value={this.state.wallet}
                  onChangeText={wallet => this.setState({ wallet })}
                />

                <Button
                  onPress={() =>
                    this.props.updateParentWallet(this.state.wallet)
                  }
                >
                  <Text>update wallet</Text>
                </Button>
              </CardItem>
            </Body>
          </CardItem>
        </Card>
      );
    }
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
)(ParentProfile);
