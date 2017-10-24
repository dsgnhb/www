import React from 'react';
import {Link} from 'react-router-dom';

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
                    href: '/',
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
                    href: '/about',
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
                    href: '/discord',
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
        },
    ];

    return (
        <footer>
            <div className="container">
                <div className="flex-list">
                    {
                        columns.map(item => (
                            <Column {...item} />
                        ))
                    }
                </div>
                <Link to="/">&copy; 2016-2017 - designhub&trade;</Link>
            </div>
        </footer>
    );
}

function Column(props) {
    let title = "";
    if (props.title) {
        title = <h3>{props.title}</h3>;
    }
    return (
        <div className="item">
            {title}
            <ul>
                {
                    props.links.map(item => (
                        <li>
                            <Link to={item.href}>
                                {item.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}
