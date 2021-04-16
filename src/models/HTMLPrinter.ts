import { PrinterInterface } from '../interfaces/Printer.interface';

export class HTMLprinter implements PrinterInterface {
    print(a: number, b: number, operation: string, result: number): string {
        return `<p>a = ${a}, b = ${b}, operation = ${operation}, result = ${result}</p>`;
    }
}
