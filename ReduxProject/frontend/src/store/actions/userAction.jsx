import { toast } from "react-toastify";
import axios from "../../api/apiconfig";
import { loaduser ,removeuser } from "../reducers/userSlice";

export const asynccurrentuser = () => async (dispatch, getState) => {
    try {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) dispatch(loaduser(user));
        // else console.log("User not logged in!");
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
        dispatch(removeuser());
        // console.log("User Logged Out!");
        toast.dark("Logged Out!")
    } catch (error) {
        console.log(error);
        toast.loading("Something went wrong!❓")
    }
};

export const asyncregisteruser = (user) => async (dispatch, getState) => {
    try {
        const res = await axios.post("/users", user);
        // console.log(res);
          toast.dark("Register success!❤️")
         
    } catch (error) {
        console.log(error);
          toast.error("Something went wrong!❓")
    }
};

export const asyncupdateuser = (id, user) => async (dispatch, getState) => {
    try {
        const { data } = await axios.patch("/users/" + id, user);
        localStorage.setItem("user", JSON.stringify(data));
        dispatch(asynccurrentuser());
    } catch (error) {
        console.log(error);
    }
};

export const asyncdeleteuser = (id) => async (dispatch, getState) => {
    try {
        await axios.delete("/users/" + id);
        dispatch(asynclogoutuser());
    } catch (error) {
        console.log(error);
    }
};