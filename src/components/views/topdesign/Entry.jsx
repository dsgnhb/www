import React from 'react';

export default function TopDesignEntry(props) {
    let username = props.username;
    if (username.length > 14) {
        username = username.slice(0, 12) + '...';
    }
    username += ' ';

    return (
        <div className="item" style={{backgroundImage: `url(${props.image})`}}>
            <div className="overlay flex-center-center">
                <h4>#{props.id}</h4>
                <h3>{username}</h3>
                <h4>{props.likes} Votes</h4>
            </div>
        </div>
    );
}
