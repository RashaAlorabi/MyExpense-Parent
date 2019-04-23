import axios from "axios";
import jwt_decode from "jwt-decode";
import { AsyncStorage } from "react-native";
import { fetchParentProfile } from "./parentAction";
import * as actionTypes from "./actionTypes";
// import { setErrors } from "./errors";

const instance = axios.create({
  //baseURL: "http://127.0.0.1:8000/api"
  //baseURL: "http://172.20.10.2:30/api"
  //baseURL: "http://172.20.10.4:30/api/"
  baseURL: "http:// 192.168.8.146:30/api/"
});
/* -- set Token to brow -- */
const setAuthToken = token => {
  if (token) {
    AsyncStorage.setItem("token", token);
    //this line will put the token in the code format
    axios.defaults.headers.common.Authorization = `jwt ${token}`;
  } else {
    AsyncStorage.removeItem("token");
    delete axios.defaults.headers.common.Authorization;
  }
};
/* -- check for expired token -- */
export const checkForExpiredToken = () => {
  return dispatch => {
    // Get token
    const token = AsyncStorage.getItem("token");

    if (token) {
      const currentTime = Date.now() / 1000;

      // Decode token and get user info
      const user = jwt_decode(token);

      console.log((user.exp - currentTime) / 60);

      // Check token expiration
      if (user.exp >= currentTime) {
        // Set auth token header
        setAuthToken(token);
        // Set user
        dispatch(setCurrentUser(user));
      } else {
        dispatch(logout());
      }
    }
  };
};
/* -- login from api -- */
export const login = (userData, navigation) => {
  return async dispatch => {
    try {
      let response = await instance.post("school/login/", userData);
      let user = response.data;
      console.log("TCL: login -> user", user);
      let decodedUser = jwt_decode(user.token);
      setAuthToken(user.token);
      await dispatch(setCurrentUser(decodedUser));
      await dispatch(fetchParentProfile());
      navigation.replace("ParentProfile");
    } catch (error) {
      console.error(error);
    }
  };
};
/* -- signup from api -- */

//will delete the whole user obj
export const logout = () => {
  setAuthToken();
  navigation.navigate("Login");
  return setCurrentUser();
};
/* -- set current user to see -- */
const setCurrentUser = user => ({
  type: actionTypes.SET_CURRENT_USER,
  payload: user
});
