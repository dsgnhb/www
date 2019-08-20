export default function fetcher(endpoint, optionsobject) {
    if (isEmptyObject(optionsobject)) {
        return fetch(`https://api.designhub.fun/${endpoint}`);
    } else {
        return fetch(`https://api.designhub.fun/${endpoint}`, optionsobject);
    }
}

function isEmptyObject(obj) {
    // eslint-disable-next-line
    for (let prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
            return false;
        }
    }
    return true;
}
