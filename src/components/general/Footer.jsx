import React from 'react';
import {MainLink} from './misc/Titles';
import LinkDuo from './misc/LinkDuo';

export default function Footer() {
    const columns = [
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

    return (
        <div>
            <div className="spacer" />
            <Join />
            <footer>
                <div className="container">
                    <div className="flex-list">
                        {columns.map(item => <Column key={columns.indexOf(item)} {...item} />)}
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
                    </ul>
                </div>
            </footer>
        </div>
    );
}

function Column(props) {
    let title = '';
    if (props.title) {
        title = <h3>{props.title}</h3>;
    }
    return (
        <div className="item">
            {title}
            <ul>
                {props.links.map(item => (
                    <li key={props.links.indexOf(item)}>
                        <LinkDuo to={item.href}>{item.name}</LinkDuo>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function Join() {
    return (
        <section id="join" className="flex-center-center">
            <div className="icon" />
            <h3>Bereit, die Hölle zu entdecken?</h3>
            <MainLink href="https://discordapp.com/invite/PGv5TR3">Komm auf unseren Discord</MainLink>
        </section>
    );
}
