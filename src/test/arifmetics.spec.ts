
const {MyMath} = require('./../models/Math');
const {expect} = require('chai');
const {Operation} = require('./../enums/Operation');


describe('The add function', () => {
    it('Should add 2 numbers', () => {
        const math = new MyMath(4,5, Operation.add);
        const result = math.add();

        expect(result).to.be.eq(9);
    });
});