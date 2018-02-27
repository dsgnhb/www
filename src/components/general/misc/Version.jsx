import {Component} from 'react';
import PackageJSON from '../../../../package.json';

/**
 * Link that also works for external URL's
 */
export default class Version extends Component {
    render() {
        // eslint-disable-next-line
        return PackageJSON.version;
    }
}
