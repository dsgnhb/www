import PropTypes from 'prop-types';
import React, {Component} from 'react';

export default class TopDesignEntry extends Component {
    static propTypes = {
        id: PropTypes.any,
        image: PropTypes.any,
        likes: PropTypes.number,
        username: PropTypes.any
    };

    render() {
        let username = this.props.username;
        if (username.length > 14) {
            username = username.slice(0, 12) + '...';
        }
        username += ' ';

        return (
            <div className="item" style={{backgroundImage: `url(${this.props.image})`}}>
                <div className="overlay flex-center-center">
                    <h4>#{this.props.id}</h4>
                    <h3>{username}</h3>
                    <h4>{this.props.likes} Votes</h4>
                </div>
            </div>
        );
    }
}
