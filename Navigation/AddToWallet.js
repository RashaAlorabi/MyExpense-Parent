import { createStackNavigator } from "react-navigation";
import AddToWalletPage from "../Components/AddToWallet";

const AddToWallet = createStackNavigator(
  {
    AddToWalletPage: AddToWalletPage,
  },
  {
    initialRouteName: "AddToWalletPage",
    cardStyle: {
      backgroundColor: "rgb(248, 249, 250)"
    },
    // headerMode:"none"
  }
);

export default AddToWallet;
