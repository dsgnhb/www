import React from 'react';
import LevelEntry from './Entry';

export default class LevelEntries extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            entries: [],
            loaded: false
        };

        const self = this;

        fetch('https://api.dsgnhb.de/levels')
            .then(response => {
                self.setState({loaded: true});
                return response.json();
            })
            .then(json => {
                return self.setState({
                    entries: json.map(item => {
                        return item;
                    })
                });
            });
    }

    render() {
        let message = '';
        let entries = '';

        if (!this.state.loaded) {
            message = <p>Lade Daten...</p>;
        } else {
            entries =
                /**
                 * @typedef {Object} item
                 * @property {string} userid
                 * @property {string} username
                 * @property {number} discriminator
                 * @property {string} avatar
                 * @property {number} xp
                 * @property {number} chests
                 * @property {number} rank
                 * @property {number} coins
                 */
                this.state.entries.map(item => <LevelEntry key={item.rank} {...item} />);
        }

        return (
            <div className="content">
                <div className="flex-list member">
                    {message}
                    {entries}
                </div>
            </div>
        );
    }
}
