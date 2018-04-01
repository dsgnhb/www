import React, {Component} from 'react';

export default class Meme extends Component {
    render() {
        return (
            <div align="center">
                <iframe
                    src="https://www.youtube.com/embed/DLzxrzFCyOs?rel=0&amp;controls=0&amp;autoplay=1&amp;showinfo=0"
                    allow="autoplay; encrypted-media"
                    allowfullscreen=""
                    frameborder="0"
                    width="100%"
                    height="1000px"
                />
            </div>
        );
    }
}
