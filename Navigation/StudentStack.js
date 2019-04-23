import { createStackNavigator } from "react-navigation";

import StudentsList from "../Components/StudentsList";
import StudentDetail from "../Components/StudentDetail";
import StudentRow from "../Components/StudentsList/StudentRow";
const StudentStack = createStackNavigator(
  {
    StudentsList: StudentsList,
    StudentRow: StudentRow,
    StudentDetail: StudentDetail
  },
  {
    initialRouteName: "StudentsList",
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

export default StudentStack;
