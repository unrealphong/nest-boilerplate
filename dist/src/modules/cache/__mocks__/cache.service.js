"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheService = void 0;
exports.CacheService = jest.fn().mockReturnValue({
    set: jest.fn((_key, _value, _expired) => Promise.resolve('OK')),
    setNx: jest.fn((_key, _value) => Promise.resolve(1)),
    get: jest.fn((_key) => Promise.resolve('data')),
    del: jest.fn((_key) => Promise.resolve(1)),
    keys: jest.fn((_prefix) => Promise.resolve(['key1', 'key2']))
});
//# sourceMappingURL=cache.service.js.map