import { createStackNavigator } from "react-navigation";

import StudentsList from "../Components/StudentsList";
import StudentDetail from "../Components/StudentDetail";
import StudentRow from "../Components/StudentsList/StudentRow";
import StudentOrderHistory from "../Components/StudentDetail/orderHistory/orderHistory";
const StudentStack = createStackNavigator(
  {
    StudentsList: StudentsList,
    StudentRow: StudentRow,
    StudentDetail: StudentDetail,
    StudentOrderHistory:StudentOrderHistory

  },
  {
    initialRouteName: "StudentsList",
    cardStyle: {
      backgroundColor: "rgb(248, 249, 250)"
    },
  }
);

export default StudentStack;
