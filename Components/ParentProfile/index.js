import React, { Component } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { Constants, WebBrowser } from "expo";
import * as actionCreators from "../../Store/actions";
import LogOut from ".././LogoutButton";
import { Icon, Left, Right, Body } from "native-base";

class ParentProfile extends Component {
  async componentDidMount() {
    await this.props.fetchParentProfile();
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: "صفحتي",
      headerRight: <LogOut />,
      headerStyle: { backgroundColor: "#3DDDD5" }
    };
  };
  state = {
    wallet: "",
    result: null
  };
  _handlePressButtonAsync = async (parentWallet, parentID) => {
    let result = await WebBrowser.openAuthSessionAsync(
      `http://127.0.0.1:8000/api/parent/add/to/wallet/${parentWallet}/${parentID}/`,
      "http://127.0.0.1:8000/api/parent/profile/"
    );
    this.setState({ result });
  };
  render() {
    let parent;
    if (this.props.loading) {
      return (parent = <Text />);
    } else {
      parent = this.props.parent;
      return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Icon
              name={"account-edit"}
              type={"MaterialCommunityIcons"}
              onPress={() => this.props.navigation.navigate("UpdateParent")}
              style={{
                fontSize: 40,
                marginLeft: 20,
                marginTop: 10,
                color: "white"
              }}
            />
          </View>
          <Image
            style={styles.avatar}
            source={
              parent.image
                ? { uri: parent.image }
                : require("../../assets/man.png")
            }
            resizeMode="stretch"
          />
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>{`${parent.user.first_name} ${
                parent.user.last_name
              }`}</Text>
              <Text style={styles.info}>{`@${parent.user.username}`}</Text>
              <Text style={styles.description}>{`${parent.user.email}`}</Text>
              <View style={styles.description}>
                {/* <Icon name={"money"} type={"FontAwesome"} onPress={() =>this.props.navigation.navigate('UpdateParent')} style={{fontSize: 24, marginRight:5, marginTop:2, color:"black"}}/> */}
                <Text style={{ fontSize: 25, marginTop: 8 }}>
                  {`${parent.wallet}`}
                </Text>
                <Image
                  source={require("../../assets/sr.png")}
                  style={{ width: 80, height: 40 }}
                />
              </View>
            </View>
          </View>
        </View>
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
    updateParentWallet: (wallet, parentID) =>
      dispatch(actionCreators.updateParentWallet(wallet, parentID))
  };
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#72B7E2",
    height: 200
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 130
  },
  name: {
    fontSize: 22,
    color: "#48413E",
    fontWeight: "600"
  },
  body: {
    marginTop: 40
  },
  bodyContent: {
    // flex: 1,
    marginTop: 30,
    alignItems: "center"
    // padding:30,
  },
  name: {
    fontSize: 28,
    color: "#48413E",
    fontWeight: "600"
  },
  info: {
    fontSize: 16,
    color: "#00BFFF",
    marginTop: 10
  },
  description: {
    fontSize: 16,
    color: "#5D5D5D",
    marginTop: 20,
    // textAlign: 'center',
    flexDirection: "row",
    flexWrap: "wrap"
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    width: 250,
    borderRadius: 30,
    backgroundColor: "black"
  },
  buttonlogout: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    width: 250,
    borderRadius: 30,
    backgroundColor: "red"
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ParentProfile);
