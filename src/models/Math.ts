import { Operation } from './../enums/Operation';
import { PrinterInterface } from '../PrinterInterface/Printer.interface';

export class MyMath {
    result: number;
    printer: PrinterInterface;
    constructor(private firstNumber: number,private secondNumber: number,private operation: Operation) {
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
        this.operation = operation;
    }
    add(): number {
        return this.result = this.firstNumber + this.secondNumber;
    }
    subtract(): number {
        return this.result = this.firstNumber - this.secondNumber;
    }
    multiply(): number {
        return this.result = this.firstNumber * this.secondNumber;
    }
    divide(): number {
        if (this.secondNumber != 0) {
            return this.result = this.firstNumber / this.secondNumber;
        }
        throw 'Division operation cannot be performed';
    }
    setPrinter(p: PrinterInterface): void {
        this.printer = p;
    }
    getResult(): string {
        if (!this.printer) {
            throw 'Printer not set';
        }
        return this.printer.print(this.firstNumber, this.secondNumber, this.operation, this.result);
    }
}
