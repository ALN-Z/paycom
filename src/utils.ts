import { JSONprinter } from './models/JSONPrinter';
import { Textprinter } from './models/TextPrinter';
import { HTMLprinter } from './models/HTMLPrinter';
import { IPrinter } from './interfaces/IPrinter';
import { MyMath } from './models/Math';

export function parseAsInt(value: string): number {
    const parsedValue = parseInt(value);
    if (isNaN(parsedValue)) {
        throw `${value} is not a number`;
    }
    return parsedValue;
}


const posiblePrinters = {
    'json': new JSONprinter(),
    'text': new Textprinter(),
    'html': new HTMLprinter()
};

export function validatePrinter(printerName: string): void {
    if (!Object.keys(posiblePrinters).includes(printerName)) {
        throw `Printer "${printerName}" is unknown! Posible printers are: json | text | html.`;
    }
}

export function initPrinter(printerName: string): IPrinter {
    return posiblePrinters[printerName];
}

export function validateOperation(operationName: string): void {
    if (!['add', 'subtract', 'multiply', 'divide'].includes(operationName)) {
        throw `Operation "${operationName}" is unknown! Posible operations are: add | subtract | multiply | divide.`;
    }
}

export function executeOperation(math: MyMath, operationName: string): number {
    return math[operationName]();
}
