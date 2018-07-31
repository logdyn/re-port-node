const data = new WeakMap();

module.exports = class LogRecord {
    constructor(level, message, timestamp) {
        timestamp = timestamp ? timestamp : Date.now();
        data.set(this, {level, message, timestamp});
    }

    get level () {
        return data.get(this).level;
    }

    get message () {
        return data.get(this).message;
    }

    get timestamp () {
        return data.get(this).timestamp;
    }
}
