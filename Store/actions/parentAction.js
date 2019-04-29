import axios from "axios";
import * as actionTypes from "./actionTypes";
import { Linking } from "react-native";
const instance = axios.create({
  baseURL: "http://172.20.10.2:30/api/"
  // baseURL: "http://127.0.0.1:8000/api/"
  //baseURL: "http://172.20.10.2:30/api"
  //baseURL: "http://172.20.10.4:30/api/"
  // baseURL: "http:// 192.168.8.146:30/api/"
});

export const fetchParentProfile = () => {
  return async dispatch => {
    try {
      const res = await instance.get("parent/profile/");
      const parent = res.data;
      dispatch({
        type: actionTypes.FETCH_PARENT_PROFILE,
        payload: parent
      });
    } catch (err) {
      console.error("Error while fetching parent", err);
    }
  };
};

export const updateParentProfile = (userData, userID) => {
  return async dispatch => {
    try {
      const res = await instance.put(
        `parent/${userID}/update/profile/`,
        userData
      );
      const updatedProfile = res.data;
      dispatch({
        type: actionTypes.UPDATE_PROFILE,
        payload: updatedProfile
      });
      dispatch(fetchParentProfile());
    } catch (err) {
      console.error("Error while updating Profile", err);
    }
  };
};

export const updateParentWallet = (parentWallet, parentID) => {
  return async dispatch => {
    try {
      Linking.openURL(
        `http://127.0.0.1:8000/api/parent/add/to/wallet/${parentWallet}/${parentID}/`
      );
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

export const notAlowedItems = (items, studentId) => {
  return async dispatch => {
    try {
      const res = await instance.put(`parent/${studentId}/x_items/`, {
        not_allowed: items
      });
      const itemsList = res.data;
      dispatch({
        type: actionTypes.NOT_ALLOWED_ITEMS,
        payload: itemsList.not_allowed
      });
      dispatch(fetchParentProfile());
    } catch (err) {
      console.error("Error while adding not allowed items ", err);
    }
  };
};

export const fetchNotAlowedItems = items => {
  return async dispatch => {
    dispatch(fetchParentProfile());
    dispatch({
      type: actionTypes.NOT_ALLOWED_ITEMS,
      payload: items
    });
  };
};

export const rmCheckedItem = item => {
  return async dispatch => {
    dispatch({
      type: actionTypes.RM_CHECKED_ITEM,
      payload: item.id
    });
  };
};

export const addCheckedItem = item => {
  return async dispatch => {
    dispatch({
      type: actionTypes.ADD_CHECKED_ITEM,
      payload: item.id
    });
  };
};

export const setCheckedItem = items => {
  return async dispatch => {
    dispatch({
      type: actionTypes.SET_CHECKED_ITEMS,
      payload: items
    });
  };
};
