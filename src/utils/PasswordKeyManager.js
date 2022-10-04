class PasswordKeyManager {
    static keys = [];

    static addKey(keyData) {
        this.keys.push(keyData);
    }

    static removeKey(keyData) {
        delete this.keys[this.keys.find(i => i.key === keyData).indexOf()];
    }

    static isKey(keyData) {
        return typeof this.keys.find(i => i.key === keyData) !== 'undefined';
    }

    static getKey(keyData) {
        return this.keys.find(i => i.key === keyData);
    }

    static randomKey() {
        let key = '';
        let chars = ['A','a','B','c',1,2,3,4,5,6,7,8,9];
        let keyLength = Math.floor(Math.random() * 8);
        for(let i = 0; i < keyLength-1; i++) key += chars[Math.floor(Math.random() * chars.length)];
        return key;
    }

    static getKeys() {
        return this.keys;
    }
}

export default PasswordKeyManager;