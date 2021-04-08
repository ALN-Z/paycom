import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { executeOperation, initPrinter, parseAsInt, validateOperation, validatePrinter } from './utils';
import { MyMath } from './models/Math';

const argv: any = yargs(hideBin(process.argv)).argv;

let firstNumber: number = parseAsInt(argv.a || argv.number1);
let secondNumber: number = parseAsInt(argv.b || argv.number2);

const operation = (argv.o || argv.operation).toLowerCase();
const printervalue = (argv.p || argv.printer).toLowerCase();

const math = new MyMath(firstNumber, secondNumber, operation);

validateOperation(operation);
executeOperation(math, operation);
validatePrinter(printervalue);

const printer = initPrinter(printervalue);
math.setPrinter(printer);

const resultOperation = math.getResult();
console.log(resultOperation);
