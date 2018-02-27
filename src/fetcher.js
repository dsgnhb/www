export default function fetcher(endpoint, optionsobject){

    if(isEmptyObject(optionsobject)){
        return fetch(`https://api.dsgnhb.de/${endpoint}`);
    } else{
        return fetch(`https://api.dsgnhb.de/${endpoint}`, optionsobject)
    }

}

function isEmptyObject(obj) {
    for(let prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
            return false;
        }
    }
    return true;
}