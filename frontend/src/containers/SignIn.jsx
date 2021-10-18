import React from 'react'
import { useState } from "react";
import {  signIn } from "../reducks/users/operations";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getUser } from '../reducks/users/selectors';
import { signInError } from '../reducks/users/actions';
import Header from '../components/common/Header';


export const SignIn = () => {
    const dispatch = useDispatch();
    let history = useHistory();
    const selector = useSelector((state) => state);
    const errors = getUser(selector).errors;

    const initialValues = {
        email: "",
        password: ""
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
            <Header />
            <div className="sign-in">
                <div className="title">
                    Login and manage your balances
                </div>
                <div className="description">
                    Note down your expenditure and income, then check your balances everyday
                </div>
                <form className="form-container">
                    {errors.error ? <span className="error-text">{errors.error}</span> : null}
                    <label htmlFor="email">Email Address</label>
                    <input
                        className="custom-input"
                        placeholder="Type your email"
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={handleInputChange}
                    />
                    {errors.email ? <span className="error-text">{errors.email[0]}</span> : null}
                    <label htmlFor="password">Password</label>
                    <input
                        className="custom-input"
                        placeholder="Type your password"
                        name="password"
                        type="password"
                        value={values.password}
                        onChange={handleInputChange}
                    />
                    {errors.password ? <span className="error-text">{errors.password[0]}</span> : null}
                    <button type="button" className="custom-btn active" onClick={onSubmit}>{`${isLoading ? 'Logging In' : 'Login'}`}</button>
                </form>
            </div>
        </>
    )
}

