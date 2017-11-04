import React from 'react';
import {Link} from 'react-router-dom';
import {MainLink} from './misc/Titles';

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
                    href: '/discord'
                },
                {
                    name: 'Twitter',
                    href: '/twitter'
                },
                {
                    name: 'YouTube',
                    href: '/yt'
                },
                {
                    name: 'GitHub',
                    href: '/github'
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
                        {
                            columns.map(item =>
                                <Column key={columns.indexOf(item)} {...item} />
                            )
                        }
                    </div>
                    <ul className="legal">
                        <li>
                            <Link to="/">2016-2017 &copy; designhub&trade;</Link>
                        </li>
                        <li>
                            <Link to="/imprint">Impressum</Link>
                        </li>
                        <li>
                            <Link to="/privacypolicy">Datenschutz</Link>
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
                        <Link to={item.href}>{item.name}</Link>
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
            <MainLink href="/discord">Komm auf unseren Discord</MainLink>
        </section>
    );
}
