import React from 'react';
import {Link} from 'react-router-dom';

export default function DiscordLink() {
    return (
        <Link to="/discord" className="main prefix">
            Komm auf unseren Discord!
        </Link>
    );
}
