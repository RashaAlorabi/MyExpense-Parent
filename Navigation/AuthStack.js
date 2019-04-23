import { createStackNavigator } from "react-navigation";

import Login from "../Components/Authentication/Login";
import ParentProfile from "../Components/ParentProfile";

const AuthStack = createStackNavigator(
  {
    Login: Login,
    ParentProfile: ParentProfile
  },
  {
    initialRouteName: "Login",
    cardStyle: {
      backgroundColor: "rgb(248, 249, 250)"
    },
    defaultNavigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "rgb(95, 130, 182)"
      },
      headerTextStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default AuthStack;
