import { IPrinter } from '../interfaces/IPrinter';

export class MyMath {
    firstNumber: number;
    secondNumber: number;
    operation: string;

    constructor(firstNumber: number, secondNumber: number, operation: string) {
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
        this.operation = operation;

    }

    result: number;
    printer: IPrinter;

    add(): number {
        this.result = this.firstNumber + this.secondNumber;
        return this.result;

    }

    subtract(): number {

        this.result = this.firstNumber - this.secondNumber;
        return this.result;
    }

    multiply(): number {

        this.result = this.firstNumber * this.secondNumber;
        return this.result;
    }

    divide(): number {

        if (this.secondNumber != 0) {
            return this.result = this.firstNumber / this.secondNumber;
        }
        throw 'Division operation cannot be performed';

    }

    setPrinter(p: IPrinter): void {
        this.printer = p;
    }

    getResult(): string {
        if (this.printer) {
            return this.printer.print(this.firstNumber, this.secondNumber, this.operation, this.result);
        }
        throw 'Printer not set';
    }
}
