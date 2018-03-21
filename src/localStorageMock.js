export default class localStorageMock {
    static store = {};

    static getItem(key) {
        return this.store[key];
    }

    static setItem(key, value) {
        this.store[key] = value.toString();
    }

    static clear() {
        this.store = {};
    }

    static removeItem(key) {
        delete this.store[key];
    }
}
