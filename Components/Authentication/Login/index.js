import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../../Store/actions";
import {
  Text,
  Button,
  Body,
  List,
  ListItem,
  Form,
  Input,
  Item,
  Content,
  Container,
  Header
} from "native-base";

class Login extends Component {
  async componentDidMount() {
    await this.props.checkForToken();
    if (this.props.user){
      this.props.navigation.replace("BottomNav");
    }
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
      <Container>
        <Header transparent />
        <List style={{marginTop:200}}>
          <ListItem style={{ borderBottomWidth: 0 }}>
            <Body>
              <Form>
                <Item
                  rounded
                  style={{
                    backgroundColor: "white",
                    marginTop: 10,
                    marginBottom: 10
                  }}
                >
                  <Input
                    autoCorrect={false}
                    autoCapitalize="none"
                    onChangeText={username => this.setState({ username })}
                    placeholder="username"
                  />
                </Item>

                <Item
                  rounded
                  style={{ backgroundColor: "white", marginTop: 10 }}
                >
                  <Input
                    autoCorrect={false}
                    secureTextEntry
                    autoCapitalize="none"
                    onChangeText={password => this.setState({ password })}
                    placeholder="password"
                  />
                </Item>
              </Form>
            </Body>
          </ListItem>
          <Button
            block
            bordered
            rounded
            onPress={() => this.props.login(this.state, this.props.navigation)}
            // style={{ backgroundColor: "rgb(95, 130, 182)" }}
          >
            <Text>Login</Text>
          </Button>
        </List>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.authReducer.user
  };
};

const mapDispatchToProps = dispatch => ({
  login: (userData, navigation) =>
    dispatch(actionCreators.login(userData, navigation)),
  checkForToken: navigation =>
    dispatch(actionCreators.checkForExpiredToken(navigation))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
