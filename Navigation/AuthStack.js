import { createStackNavigator } from "react-navigation";
import Login from "../Components/Authentication/Login";
import BottomNav from "./BottomNav";
const AuthStack = createStackNavigator(
  {
    
    Login: Login,
    BottomNav:BottomNav

  },
  {
    initialRouteName: "Login",
    cardStyle: {
      backgroundColor: "rgb(248, 249, 250)"
    },
    headerMode: 'none'
  }
);

export default AuthStack;
// defaultNavigationOptions: {
//   headerTintColor: "white",
//   headerStyle: {
//     backgroundColor: "rgb(95, 130, 182)"
//   },
//   headerTextStyle: {
//     fontWeight: "bold"
//   }
// }