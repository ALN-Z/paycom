import { PrinterInterface } from '../interfaces/Printer.interface';

export class Textprinter implements PrinterInterface {
    print(a: number, b: number, operation: string, result: number): string {
        return `a = ${a}, b = ${b}, operation = ${operation}, result = ${result}`;
    }
}
