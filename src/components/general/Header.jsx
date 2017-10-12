import React from 'react';
import Menu from './Menu';
import { Link } from 'react-router-dom';
import logo from '../../files/img/logo.png';

export default function Header() {
  return (
    <header>
      <div className="content">
        <Link to="/">
          <img className="logo" src={logo} alt="Logo" />
        </Link>
        <h1>designhub.</h1>
        <Menu />
      </div>
    </header>
  );
}
