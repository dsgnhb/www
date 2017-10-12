import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <ul className="menu">
      <MenuLink link="/">Home</MenuLink>
      <MenuLink link="/topdesign">Top Design</MenuLink>
      <MenuLink link="/levels">Levels</MenuLink>
      <MenuLink link="/donate">Donations</MenuLink>
    </ul>
  );
}

function MenuLink(props) {
  return (
    <li>
      <Link to={props.link}>{props.children}</Link>
    </li>
  );
}
