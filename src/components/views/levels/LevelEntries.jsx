import React from 'react';
import LevelEntry from './LevelEntry';
import Text from '../../general/misc/Text';

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
            }).then(function (json) {
                if (!json) {
                    self.state.error = 'Cannot contact API...';
                    return;
                }

                return self.setState({
                    entries:
                        json.map((item) => {
                            return item;
                        })
                });
            }
        );
    }

    render() {
        let error = "";

        if (this.state.error !== null) {
            error = (
                <Text>{this.state.error}</Text>
            );
        }

        return (
            <div>
                {error}
                <div id="levels">
                    <div className="content table">
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
            </div>
        );
    }
}