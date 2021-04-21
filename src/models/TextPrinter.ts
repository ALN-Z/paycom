import { IPrinter } from '../PrinterInterface/IPrinter';

export class Textprinter implements IPrinter {
    print(a: number, b: number, operation: string, result: number): string {
        return `a = ${a}, b = ${b}, operation = ${operation}, result = ${result}`;
    }
}
