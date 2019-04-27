import { createStackNavigator } from "react-navigation";
import { flipY } from 'react-navigation-transitions';
import ParentProfile from "../Components/ParentProfile";
import UpdateParent from "../Components/UpdateProfile";
import {Image} from "react-native";

const ParentStack = createStackNavigator(
  {
    ParentProfile: ParentProfile,
    UpdateParent:UpdateParent

  },
  {
    initialRouteName: "ParentProfile",
    transitionConfig:() => flipY(1500),
    cardStyle: {
      backgroundColor: "rgb(248, 249, 250)"
    },
    // headerMode:"none"
  }
);

export default ParentStack;
