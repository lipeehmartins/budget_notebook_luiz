import API from "../../API";
import { signInAction, signUpAction, signUpError, signInError } from "./actions";

const api = new API();
const LOGIN_USER_KEY = "BUDGET_NOTEBOOK_LOGIN_USER_KEY";


export const signUp = (data = {}) => {
    return async (dispatch) => {
        return api.signUp(data)
            .then(response => {
                localStorage.setItem(LOGIN_USER_KEY, JSON.stringify(response));
                dispatch(signUpAction(response));
            })
            .catch(error => {
                dispatch(signUpError(error.response.data));
            });
    };
};

export const signIn = (data = {}) => {
    return async (dispatch) => {
        return api.signIn(data)
            .then(response => {
                localStorage.setItem(LOGIN_USER_KEY, JSON.stringify(response));
                dispatch(signInAction(response));
            })
            .catch(error => {
                dispatch(signInError(error.response.data));
            });
    };
};

export const fetchUserFromLocalStorage = () => {
    return async (dispatch) => {
        const userJSON = localStorage.getItem(LOGIN_USER_KEY);
        if (userJSON && userJSON.token !== "") {
            dispatch(signInAction(JSON.parse(userJSON)));
        }
    };
};

