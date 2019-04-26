import axios from "axios";
import * as actionTypes from "./actionTypes";
import {Linking} from "react-native"
const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api"
  //baseURL: "http://172.20.10.2:30/api"
  //baseURL: "http://172.20.10.4:30/api/"
  // baseURL: "http:// 192.168.8.146:30/api/"
});

export const fetchParentProfile = () => {
  return async dispatch => {
    try {
      const res = await instance.get("parent/profile/");
      const parent = res.data;
      console.log("parent action", parent);
      dispatch({
        type: actionTypes.FETCH_PARENT_PROFILE,
        payload: parent
      });
    } catch (err) {
      console.error("Error while fetching parent", err);
    }
  };
};

export const updateParentWallet = (parentWallet, parentID) => {
  return async dispatch => {
    try {
      Linking.openURL(`http://127.0.0.1:8000/api/parent/add/to/wallet/${parentWallet}/${parentID}/`)
      dispatch(fetchParentProfile());
    } catch (err) {
      console.error("Error while UPDATING wallet", err);
    }
  };
};

export const updateStudentLimit = (studentDate, studentLmit) => {
  return async dispatch => {
    try {
      const res = await instance.put(`student/${studentDate.id}/limit/`, {
        limit: studentLmit
      });
      const limit = res.data;
      dispatch({
        type: actionTypes.UPDATE_STUDENT_LIMIT,
        payload: limit
      });
      dispatch(fetchParentProfile());
    } catch (err) {
      console.error("Error while UPDATING wallet", err);
    }
  };
};
