import React, {Component} from 'react';

export default class Fact extends Component {
    render() {
        return (
            <div className="item">
                <h3 className={`fact gradient text ${this.props.color}`}>{this.props.data}</h3>
                <h3>{this.props.name}</h3>
                <p>{this.props.children}</p>
            </div>
        );
    }
}
