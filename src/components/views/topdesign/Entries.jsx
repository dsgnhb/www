import React from 'react';
import TopDesignEntry from './Entry';

export default class TopDesignEntries extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            entries: []
        };

        const self = this;

        fetch('https://api.dsgnhb.de/topdesign/posts/currentmonth')
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                return self.setState({
                    entries:
                        json.map((item) => {
                            return item
                        })
                });
            });
    }

    render() {
        return (
            <div className="content">
                <div className="flex-list posts">
                    {
                        /**
                         * @typedef {Object} item
                         * @property {number} id
                         * @property {string} username
                         * @property {string} avatar
                         * @property {string} userid
                         * @property {string} image
                         * @property {number} likes
                         */
                        this.state.entries.map((item) => (
                            <TopDesignEntry key={item.id} {...item} />
                        ))
                    }
                </div>
            </div>
        );
    }
}
