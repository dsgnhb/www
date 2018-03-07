import PropTypes from 'prop-types';
import React, {Component} from 'react';
import LinkDuo from '../misc/LinkDuo';

export default class Column extends Component {
    static propTypes = {
        links: PropTypes.any,
        title: PropTypes.string
    };

    render() {
        let title = '';
        if (this.props.title) {
            title = <h3>{this.props.title}</h3>;
        }
        return (
            <div className="item">
                {title}
                <ul>
                    {this.props.links.map(item => (
                        <li key={this.props.links.indexOf(item)}>
                            <LinkDuo to={item.href}>{item.name}</LinkDuo>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
