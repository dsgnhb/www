import React from 'react';
import {Link} from 'react-router-dom';

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            navState: false
        };

        this.navStyle = {
            closed: {
                transform: 'translateY(-100%)'
            },
            open: {
                transform: 'translateY(0)'
            }
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
    }

    toggleNav() {
        this.setState({
            navState: !this.state.navState
        });
    }

    closeNav() {
        this.setState({
            navState: false
        });
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
                                <Link to="/" onClick={this.closeNav}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" onClick={this.closeNav}>
                                    Über uns
                                </Link>
                            </li>
                            <li>
                                <Link to="/apply" onClick={this.closeNav}>
                                    Bewerben
                                </Link>
                            </li>
                            <li>
                                <Link to="/topdesign" onClick={this.closeNav}>
                                    Top Design
                                </Link>
                            </li>
                            <li>
                                <Link to="/levels" onClick={this.closeNav}>
                                    Leaderboard
                                </Link>
                            </li>
                            <li>
                                <Link to="/donate" onClick={this.closeNav}>
                                    Donations
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}
