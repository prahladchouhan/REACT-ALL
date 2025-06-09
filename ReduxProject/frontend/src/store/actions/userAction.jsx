import axios from "../../api/apiconfig";
import { loaduser } from "../reducers/userSlice";

export const asynccurrentuser = () => async (dispatch, getState) => {
    try {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) dispatch(loaduser(user));
        else console.log("User not logged in!");
    } catch (error) {
        console.log(error);
    }
};
export const asyncloginuser = (user) => async (dispatch, getState) => {
    try {
        const { data } = await axios.get(
            `/users?email=${user.email}&password=${user.password}`
        );
        localStorage.setItem("user", JSON.stringify(data[0]));
    } catch (error) {
        console.log(error);
    }
};

export const asynclogoutuser = () => async (dispatch, getState) => {
    try {
        localStorage.removeItem("user");
        console.log("User Logged Out!");
    } catch (error) {
        console.log(error);
    }
};

export const asyncregisteruser = (user) => async (dispatch, getState) => {
    try {
        const res = await axios.post("/users", user);
        console.log(res);
    } catch (error) {
        console.log(error);
    }
};