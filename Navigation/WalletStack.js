import { createStackNavigator } from "react-navigation";

const WalletStack = createStackNavigator(
  {
    Wallet: StudentList,
    StudentDetail: StudentDetail
  },
  {
    initialRouteName: "StudentList",
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

export default WalletStack;
