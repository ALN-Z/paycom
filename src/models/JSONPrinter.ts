import { PrinterInterface } from '../interfaces/Printer.interface';

export class JSONprinter implements PrinterInterface {
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
