import { createBottomTabNavigator } from "react-navigation";
import React from "react";
import { Icon } from "native-base";
import ParentStack from "./ParentStack";
import StudentStack from "./StudentStack";
import AddToWallet from "./AddToWallet"
const BottomNav = createBottomTabNavigator(
  {
    ParentStack: ParentStack,
    AddToWallet:AddToWallet,
    Student: StudentStack,

  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName = "";
        let iconType = "";
        switch (routeName) {
          case "Auth":
            iconName = "account-child";
            iconType = "MaterialCommunityIcons";
            break;
          case "Student":
            iconName = "human-child";
            iconType = "MaterialCommunityIcons";
            break;
          case "AddToWallet":
            iconName = "money";
            iconType = "FontAwesome";
            break;
          default:
            iconName = "account";
            iconType = "MaterialCommunityIcons";
        }
        return (
          <Icon name={iconName} type={iconType} style={{ color: tintColor }} />
        );
      }
    }),
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "white",
      inactiveTintColor: "black",
      style: {
        backgroundColor: "rgb(20,90,100)"
      }
    },
    // headerMode: 'none'
  }
);

export default BottomNav;
