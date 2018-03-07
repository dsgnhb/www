import PropTypes from 'prop-types';
import React, {Component} from 'react';
import LinkDuo from '../../../general/misc/LinkDuo';
export default class Category extends Component {
    static propTypes = {
        children: PropTypes.any,
        id: PropTypes.any,
        link: PropTypes.any,
        name: PropTypes.any
    };

    render() {
        if (this.props.link) {
            return (
                <LinkDuo to={this.props.link}>
                    <div className="item">
                        <div className={`icon ${this.props.id}`} />
                        <h3>{this.props.name}</h3>
                        <p>{this.props.children}</p>
                    </div>
                </LinkDuo>
            );
        } else {
            return (
                <div className="item">
                    <div className={`icon ${this.props.id}`} />
                    <h3>{this.props.name}</h3>
                    <p>{this.props.children}</p>
                </div>
            );
        }
    }
}
