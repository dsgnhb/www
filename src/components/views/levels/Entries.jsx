import React from 'react';
import LevelEntry from './Entry';

export default class LevelEntries extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            entries: []
        };

        const self = this;

        fetch('https://api.dsgnhb.de/levels')
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                return self.setState({
                    entries: json.map(item => {
                        return item;
                    })
                });
            });
    }

    render() {
        return (
            <div className="content">
                <div className="flex-list member">
                    {
                        /**
                         * @typedef {Object} item
                         * @property {string} userid
                         * @property {string} username
                         * @property {number} discriminator
                         * @property {string} avatar
                         * @property {number} xp
                         * @property {number} chests
                         * @property {number} rank
                         */
                        this.state.entries.map((item) => (
                            <LevelEntry key={item.rank} {...item} />
                        ))
                    }
                </div>
            </div>
        );
    }
}
