import { createBottomTabNavigator } from "react-navigation";
import React from "react";
import { Icon } from "native-base";
import AuthStack from "./AuthStack";

import StudentStack from "./StudentStack";

const BottomNav = createBottomTabNavigator(
  {
    Auth: AuthStack,
    Student: StudentStack
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
          // case "Wallet":
          //   iconName = "cart";
          //   iconType = "MaterialCommunityIcons";
          //   break;
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
    }
  }
);

export default BottomNav;
