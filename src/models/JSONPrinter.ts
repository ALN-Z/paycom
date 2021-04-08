import { IPrinter } from '../interfaces/IPrinter';

export class JSONprinter implements IPrinter {
    print(a: number, b: number, operation: string, result: number): string {

        const obj = {
            a,
            b,
            operation,
            result
        };

        return JSON.stringify(obj);
    }
}
