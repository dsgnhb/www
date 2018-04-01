import PropTypes from 'prop-types';
import React, {Component} from 'react';
import LinkDuo from '../../../../general/misc/LinkDuo';

export default class TeamMember extends Component {
    static propTypes = {
        activity: PropTypes.any,
        children: PropTypes.any,
        id: PropTypes.any,
        link: PropTypes.any,
        name: PropTypes.string
    };

    render() {
        if (this.props.link) {
            return (
                <div className="item">
                    <div className={`icon ${this.props.id}`} />
                    <LinkDuo to={this.props.link}>
                        <h3>{this.props.name}</h3>
                    </LinkDuo>
                    <h4>{this.props.activity}</h4>
                    <p>{this.props.children}</p>
                </div>
            );
        } else {
            return (
                <div className="item">
                    <div className={`icon ${this.props.id}`} />
                    <h3>{this.props.name}</h3>
                    <h4>{this.props.activity}</h4>
                    <p>{this.props.children}</p>
                </div>
            );
        }
    }
}
