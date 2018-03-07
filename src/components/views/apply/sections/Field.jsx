import PropTypes from 'prop-types';
import React, {Component} from 'react';

export default class Field extends Component {
    static propTypes = {
        autofocus: PropTypes.any,
        id: PropTypes.any,
        label: PropTypes.any,
        name: PropTypes.string,
        onChange: PropTypes.func,
        type: PropTypes.any,
        value: PropTypes.any
    };

    render() {
        let input;
        switch (this.props.type) {
            case 'small':
                input = (
                    <input
                        type="text"
                        name={this.props.name}
                        id={`form-${this.props.id}`}
                        placeholder={this.props.value}
                        onChange={this.props.onChange}
                        autoFocus={this.props.autofocus}
                        required
                    />
                );
                break;
            case 'number':
                input = (
                    <input
                        type="number"
                        name={this.props.name}
                        id={`form-${this.props.id}`}
                        min="13"
                        max="100"
                        placeholder={this.props.value}
                        onChange={this.props.onChange}
                        autoFocus={this.props.autofocus}
                        required
                    />
                );
                break;
            case 'big':
                input = (
                    <textarea
                        name={this.props.name}
                        id={`form-${this.props.id}`}
                        cols="30"
                        rows="6"
                        placeholder={this.props.value}
                        onChange={this.props.onChange}
                        autoFocus={this.props.autofocus}
                        required
                    />
                );
                break;
            default:
                input = (
                    <input
                        type="text"
                        name={this.props.name}
                        id={`form-${this.props.id}`}
                        placeholder={this.props.value}
                        onChange={this.props.onChange}
                        autoFocus={this.props.autofocus}
                        required
                    />
                );
                break;
        }
        return (
            <div>
                <label htmlFor="name">{this.props.label}</label>
                {input}
            </div>
        );
    }
}
