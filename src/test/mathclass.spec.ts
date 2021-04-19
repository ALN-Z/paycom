import { MyMath } from "../models/Math";
import { executeOperation, initPrinter, parseAsInt, validateOperation, validatePrinter } from '../utils';
import { expect } from "chai";
import { Operation } from "../enums/Operation";


describe("Check class MATH", ()=> {
    it("Should give result in json format!", () => {
        const math = new MyMath(8, 0, Operation.add);
        const printer = initPrinter('json');
        math.setPrinter(printer);
        math.add();
        const result = math.getResult();
        expect(result).to.be.equal('{"a":8,"b":0,"operation":"add","result":8}');
    })

    it("Should give result in text format!", () => {
        const math = new MyMath(8, 0, Operation.add);
        const printer = initPrinter('text');
        math.setPrinter(printer);
        math.add();
        const result = math.getResult();
        expect(result).to.be.equal('a = 8, b = 0, operation = add, result = 8');
    })

    it("Should give result in html format!", () => {
        const math = new MyMath(8, 0, Operation.add);
        const printer = initPrinter('html');
        math.setPrinter(printer);
        math.add();
        const result = math.getResult();
        expect(result).to.be.equal('<p>a = 8, b = 0, operation = add, result = 8</p>');
    })

    it("Should drop error when printer is random text", () => {
        const printerName =  'asdasd';
        expect(() => validatePrinter(printerName)).to.throw(`Printer "${printerName}" is unknown! Posible printers are: json | text | html.`);

    })

    it("Should drop error when printer is empty string", () => {
        const printerName =  ' ';
        expect(()=> validatePrinter(printerName)).to.throw(`Printer "${printerName}" is unknown! Posible printers are: json | text | html.`);

    })

    

})