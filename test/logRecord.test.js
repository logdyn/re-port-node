let LogRecord = require('../lib/logRecord');

describe('Test LogRecord functionality', () => {
    test('LogRecord constructor', () => {
        let timestamp = Date.now();
        let logRecord = new LogRecord('INFO', 'Test Message', timestamp);
        expect(logRecord.level).toBe('INFO');
        expect(logRecord.message).toBe('Test Message');
        expect(logRecord.timestamp).toBe(timestamp);
    });
    test('LogRecord is read-only', () => {
        let timestamp = Date.now();
        let logRecord = new LogRecord('INFO', 'Test Message', timestamp);

        logRecord.level = 'WARN';
        logRecord.message = 'New Message';
        logRecord.timestamp = Date.now();

        expect(logRecord.level).toBe('INFO');
        expect(logRecord.message).toBe('Test Message');
        expect(logRecord.timestamp).toBe(timestamp);
    });
});
