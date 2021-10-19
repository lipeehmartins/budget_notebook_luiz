import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import { SignIn } from "./containers/SignIn";
import {SignUp } from "./containers/SignUp";
import  Table  from "./components/common/Table";
import { fetchUserFromLocalStorage } from "./reducks/users/operations";
import { getUser } from "./reducks/users/selectors";

const Router = () => {
    const dispatch = useDispatch();
    const selector = useSelector((state) => state);
    const user = getUser(selector);
    const token = user ? user.token : null;
    useEffect(() => {
        dispatch(fetchUserFromLocalStorage());
        // eslint-disable-next-line
    }, []);

    return (
        <React.Fragment>
            <Switch>
                <Route exact path={"/"} component={token ? Table : Home} />
                <Route exact path={"/signin"} component={token ? Table : SignIn} />
                <Route exact path={"/signup"} component={SignUp} />
            </Switch>
        </React.Fragment>
    );
};
export default Router;