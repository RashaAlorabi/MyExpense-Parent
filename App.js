import React from "react";
import { Provider } from "react-redux";
import AppContainer from "./Navigation";
import store from "./Store";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;
