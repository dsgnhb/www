import React from 'react';
import Menu from './Menu';
import logo from '../../files/img/logo.png';

export default function Header() {
    return (
        <header>
            <div className="content">
                <a href="/">
                    <img className="logo" src={logo} alt="Logo" />
                </a>
                <h1>designhub.</h1>
                <Menu />
            </div>
        </header>
    );
}