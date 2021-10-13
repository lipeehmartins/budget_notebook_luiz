import React from 'react'
import { SignInHeader } from '../components/common/SignInHeader'
import { useState } from "react";
import { signIn } from "../reducks/users/operations";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getUser } from '../reducks/users/selectors';
import { signInError } from '../reducks/users/actions';


export const SignIn = () => {
    const dispatch = useDispatch();
    let history = useHistory();
    const selector = useSelector((state) => state);
    const errors = getUser(selector).errors;
    const initialValues = {
        email: "",
        password: "",
    };
    const [values, setValues] = useState(initialValues);
    const [isLoading, setIsLoading] = useState(false);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };
    const onSubmit = async () => {
        dispatch(signInError({ password: ['Password is wrong.'] }));
        setIsLoading(true);
        await dispatch(signIn(values));
        setIsLoading(false);
        history.push("/");
    };

    return (
        <>
            <SignInHeader />
            <div className="container">
                <div className="main-content">
                    <h2>Login and manage your balance</h2>
                    <h3>Note down your expenses and income, then check your balance out everyday.</h3>
                </div>
                <div className="login">
                    <div className="signin">
                        <div className="form-group">
                            <label className="email">Email address</label>
                            <input name="email"
                                type="email"
                                value={values.email}
                                onChange={handleInputChange} className="input" placeholder="Type your email" />
                            {errors.email ? <span classNameName="error-text">{errors.email[0]}</span> : null}
                        </div>
                        <div className="form">
                            <label className="password">Password</label>
                            <div className="password-input">
                                <input name="password"
                                    type="password"
                                    value={values.password}
                                    onChange={handleInputChange} className="input" placeholder="Type password" />
                                {errors.password ? <span className="error-text">{errors.password[0]}</span> : null}
                            </div>
                        </div>
                    </div>
                    <button type="submit" onClick={onSubmit} className="btn-submit">{isLoading ? "Logging in..." : "Login"}</button>
                </div>
            </div>
        </>
    )
}
