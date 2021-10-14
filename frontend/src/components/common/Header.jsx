import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { signOutAction } from '../../reducks/users/actions';
import { getUser } from '../../reducks/users/selectors';

export const Header = () => {
    const history = useHistory()
    const dispatch = useDispatch();
    const selector = useSelector((state) => state);
    const user = getUser(selector);
    const token = user ? user.token : null;
    const [openModalConfirmation, setOpenModalConfirmation] = useState(false);

    return (
        <div class="header">
            <header class="nav">
                <h1 class="h1">
                    <span class="nav-title" id="nav-title">Budget</span> notebook
                </h1>
                <div class="nav-li">
                    {
                        token ?
                            <button onClick={() => setOpenModalConfirmation(true)} className="active">Sign out</button>
                            : <Link to="/signin">Sign in</Link>
                        // location.pathname === '/' ? (<Link to="/sign-in">Sign in</Link>) : <Link to="/">Sign Up</Link>
                    }

                </div>
                <div id="custom-modal" className={`custom-modal ${openModalConfirmation ? "" : "modal-hide"}`}>
                    <div
                        id="custom-modal-close"
                        onClick={() => setOpenModalConfirmation(false)}
                        className="custom-modal--bg"
                    ></div>
                    <div className="custom-modal-transaction--container">
                        <div className="custom-modal-transaction--content">
                            <div className="modal-transaction-content">
                                <strong className="text-black">Are you sure to log out?</strong>
                                <div>
                                    <button className="custom-btn mr-1" onClick={e => {
                                        dispatch(signOutAction())
                                        localStorage.removeItem("BUDGET_NOTEBOOK_LOGIN_USER_KEY")
                                        setOpenModalConfirmation(false)
                                        history.push('/');
                                    }}>
                                        Yes
                                    </button>
                                    <button className="custom-btn ml-1" onClick={() => setOpenModalConfirmation(false)}>
                                        No
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

