import React from 'react';
export default function provideColumn() {
    return [
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
