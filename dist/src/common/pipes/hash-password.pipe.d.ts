import { PipeTransform } from '@nestjs/common';
export declare class HashPasswordPipe implements PipeTransform<any> {
    transform(value: any): Promise<any>;
}
