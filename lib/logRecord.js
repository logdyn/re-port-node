const data = new WeakMap();

let levelKey = {id:'level'};
let messageKey = {id:'message'};
let timestampKey = {id:'timestamp'};

module.exports = class LogRecord {
    constructor(level, message, timestamp) {
        data.set(levelKey, level);
        data.set(messageKey, message);
        data.set(timestampKey, timestamp ? timestamp : Date.now());
    }

    get level () {
        return data.get(levelKey)
    }

    get message () {
        return data.get(messageKey)
    }

    get timestamp () {
        return data.get(timestampKey)
    }
}
