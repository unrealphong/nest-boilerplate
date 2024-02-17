import Redis from 'ioredis';
import { ICacheService } from './cache.interface';
export declare class CacheService extends ICacheService {
    private redis;
    constructor(redis: Redis);
    set(key: string, value: string, expired: string | number): Promise<'OK'>;
    setNx(key: string, value: string): Promise<number>;
    get(key: string): Promise<string | null>;
    del(key: string): Promise<number>;
    keys(prefix: string): Promise<string[]>;
}
