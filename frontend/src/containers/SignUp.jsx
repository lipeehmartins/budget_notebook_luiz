import React from 'react'
import { Header } from '../components/common/Header'
import Background from '../assets/img/index.png'
import { useState } from "react";
import { signUp } from "../reducks/users/operations";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getUser } from '../reducks/users/selectors';
import { signUpError } from '../reducks/users/actions';



export const SignUp = () => {

    const dispatch = useDispatch();
    let history = useHistory();
    const selector = useSelector((state) => state);
    const errors = getUser(selector).errors;
    const initialValues = {
        email: "",
        password: "",
        password_confirmation: ""
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
        if (values.password !== values.password_confirmation) {
            dispatch(signUpError({ password: ['Password are not the same.'] }));
            return;
        }
        setIsLoading(true);
        await dispatch(signUp(values));
        setIsLoading(false);
        history.push("/");
    };
    return (
        <>
            <Header />
            <div className="signuppage">
                <div class="background" style={{
                    background: `linear-gradient(to right, #00000090, #00000090), url(${Background})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                }} >
                    <div class="main">
                        <div class="container">
                            <div class="main-content">
                                <h2>Sign up and manage your balance</h2>
                                <h3>Note down your expenses and income, then check your balance out everyday.</h3>
                            </div>
                            <div class="form">
                                <div class="signup">
                                    <div class="form-group">
                                        <label class="email">Email address</label>
                                        <input class="email-input" name="email"
                                            type="email"
                                            value={values.email}
                                            onChange={handleInputChange} placeholder="Type your email" />
                                            {errors.email ? <span className="error-text">{errors.email[0]}</span> : null}
                                    </div>
                                    <div class="form">
                                        <label class="password">Password</label>
                                        <div class="password-input">
                                            <input class="input" name="password"
                                                type="password"
                                                value={values.password}
                                                onChange={handleInputChange} placeholder="Type password" />
                                            <div class="line"></div>
                                            <input  class="input" name="password_confirmation"
                                                type="password"
                                                value={values.password_confirmation}
                                                onChange={handleInputChange} placeholder="Re-Type password" />
                                                {errors.password ? <span className="error-text">{errors.password[0]}</span> : null}
                                        </div>
                                    </div>
                                    <button type="submit" class="btn-submit" onClick={onSubmit} href="home.html"> {isLoading ? "Registering..." : "Register"}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
