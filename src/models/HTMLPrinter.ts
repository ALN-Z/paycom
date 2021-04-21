import { IPrinter } from '../PrinterInterface/IPrinter';

export class HTMLprinter implements IPrinter {
    print(a: number, b: number, operation: string, result: number): string {
        return `<p>a = ${a}, b = ${b}, operation = ${operation}, result = ${result}</p>`;
    }
}
