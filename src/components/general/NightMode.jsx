import React from 'react';

export default class NightMode extends React.Component {
    static propTypes = {
        active: false
    };
    static defaultProps = {
        active: false
    };
    componentDidMount() {
        document.body.classList.toggle('night', this.props.active);
    }
    componentWillReceiveProps(nextProps) {
        document.body.classList.toggle('night', nextProps.active);
    }
    componentWillUnmount() {
        document.body.classList.remove('night');
    }
    render() {
        return this.props.children;
    }
}
