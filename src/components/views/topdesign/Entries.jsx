import React, {Component} from 'react';
import TopDesignEntry from './Entry';
import fetcher from '../../../fetcher';

export default class TopDesignEntries extends Component {
    constructor(props) {
        super(props);

        this.state = {
            entries: [],
            loaded: false
        };

        const self = this;

        fetcher('topdesign/posts/currentmonth')
            .then(response => response.json())
            .then(json => {
                if (json.map === undefined) {
                    return;
                }
                return self.setState({
                    loaded: true,
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
        } else if (this.state.entries.length === 0) {
            message = <p>Keine Eintr&auml;ge gefunden!</p>;
        } else {
            entries =
                /**
                 * @typedef {Object} item
                 * @property {number} id
                 * @property {string} username
                 * @property {string} avatar
                 * @property {string} userid
                 * @property {string} image
                 * @property {number} likes
                 */
                this.state.entries.map(item => <TopDesignEntry key={item.id} {...item} />);
        }

        return (
            <div className="content">
                <div className="flex-list posts">
                    {message}
                    {entries}
                </div>
            </div>
        );
    }
}
