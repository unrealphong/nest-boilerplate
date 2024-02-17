import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { TypeORMError } from 'typeorm';
export declare class TypeOrmFilter implements ExceptionFilter {
    private logger;
    catch(exception: TypeORMError, host: ArgumentsHost): void;
}
