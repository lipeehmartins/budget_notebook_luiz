import React from 'react'

export const Header = () => {
    return (
        <div class="header">
            <header class="nav">
                <h1 class="h1">
                    <span class="nav-title" id="nav-title">Budget</span> notebook
                </h1>
                <div class="nav-li">
                    <li class="active" id="logout"><a href="#">Logout</a></li>
                </div>
            </header>
        </div>
    )
}
