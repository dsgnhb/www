import {Component} from 'react';
import PackageJSON from '../../../../package.json';

export default class Version extends Component {
    render() {
        return PackageJSON.version;
    }
}
