import React from 'react';
import {Link} from 'react-router-dom';

export default class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state =
            {
                navState: false
            };
        this.navStyle = {
            closed: {
                "transform": "translateY(-100%)"
            },
            open: {
                "transform": "translateY(0)"
            }
        };

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState(
            {
                navState: !this.state.navState
            }
        );
    }

    render() {
        return (
            <div>
                <nav>
                    <div className="bar flex">
                        <Link to="/">
                            <div className="logo dark" />
                        </Link>
                        <button onClick={this.toggleNav}>menu</button>
                    </div>
                    <div
                        id="nav"
                        className="overlay"
                        style={this.state.navState ? this.navStyle.open : this.navStyle.closed}
                    >
                        <ul>
                            <li>
                                <Link to="/home">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">Über uns</Link>
                            </li>
                            <li>
                                <Link to="/youtube">YouTube</Link>
                            </li>
                            <li>
                                <Link to="/github">GitHub</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}
