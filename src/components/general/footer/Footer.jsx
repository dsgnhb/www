import PropTypes from 'prop-types';
import React, {Component} from 'react';
import LinkDuo from '../misc/LinkDuo';
import Version from '../misc/Version';
import Column from './Column';
import Join from './Join';
import provide from '../providers/columnProvider';

export default class Footer extends Component {
    static propTypes = {
        enabled: PropTypes.any.isRequired,
        handler: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.columns = provide();
    }

    /*eslint-disable */
    render() {
        return (
            <div>
                <div className="spacer" />
                <Join />
                <footer>
                    <div className="container">
                        <div className="flex-list">
                            {this.columns.map(item => <Column key={this.columns.indexOf(item)} {...item} />)}
                        </div>
                        <ul className="legal">
                            <li>
                                <LinkDuo to="/">2016-{new Date().getFullYear()} &copy; designhub</LinkDuo>
                            </li>

                            <li>
                                <LinkDuo to="/imprint">Impressum</LinkDuo>
                            </li>
                            <li>
                                <LinkDuo to="/privacypolicy">Datenschutz</LinkDuo>
                            </li>
                            <li>
                                <span style={{cursor: 'pointer'}} onClick={this.props.handler}>
                                    {!this.props.enabled ? '🌛' : '🌞'}
                                </span>
                            </li>
                            <li>
                                <LinkDuo to="https://github.com/dsgnhb/www/">
                                    Version: <Version />
                                </LinkDuo>
                            </li>
                        </ul>
                    </div>
                </footer>
            </div>
        );
    }
    /*eslint-enable */
}
