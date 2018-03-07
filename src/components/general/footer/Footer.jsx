import PropTypes from 'prop-types'
import React, {Component} from 'react';
import LinkDuo from '../misc/LinkDuo';
import Version from '../misc/Version';
import Column from './Column';
import Join from './Join';

export default class Footer extends Component {
    static propTypes = {
    enabled: PropTypes.bool.isRequired,
    handler: PropTypes.func.isRequired
  };

  constructor(props) {
        super(props);
        this.columns = [
            {
                links: [
                    {
                        name: <div className="logo light" />,
                        href: '/'
                    }
                ]
            },
            {
                title: 'Seiten',
                links: [
                    {
                        name: 'Home',
                        href: '/'
                    },
                    {
                        name: 'Top Design',
                        href: '/topdesign'
                    },
                    {
                        name: 'Leaderboard',
                        href: '/levels'
                    },
                    {
                        name: 'Donations',
                        href: '/donate'
                    }
                ]
            },
            {
                title: 'Wir',
                links: [
                    {
                        name: 'Über uns',
                        href: '/about'
                    },
                    {
                        name: 'Bewerben',
                        href: '/apply'
                    },
                    {
                        name: 'Partner',
                        href: '/partner'
                    },
                    {
                        name: 'Kontakt',
                        href: '/contact'
                    },
                    {
                        name: 'Branding',
                        href: '/brand'
                    }
                ]
            },
            {
                title: 'Social Media',
                links: [
                    {
                        name: 'Discord',
                        href: 'https://discordapp.com/invite/PGv5TR3'
                    },
                    {
                        name: 'Twitter',
                        href: 'https://twitter.com/dsgnhb'
                    },
                    {
                        name: 'YouTube',
                        href: 'https://www.youtube.com/channel/UC5xEZufXUwoxdixe0QVDrtA'
                    },
                    {
                        name: 'GitHub',
                        href: 'https://github.com/dsgnhb'
                    }
                ]
            }
        ];
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
                                <span style={{cursor: 'pointer'}} onClick={this.props.handler}> {!this.props.enabled ? '🌛': '🌞'}</span>
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
