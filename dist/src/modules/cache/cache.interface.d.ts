export declare abstract class ICacheService {
    abstract set(key: string, value: string, expired: string | number): Promise<'OK'>;
    abstract setNx(key: string, value: string): Promise<number>;
    abstract get(key: string): Promise<string | null>;
    abstract del(key: string): Promise<number>;
    abstract keys(prefix: string): Promise<string[]>;
}
