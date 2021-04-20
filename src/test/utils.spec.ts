import { expect } from "chai";
import { parseAsInt } from '../utils';

describe('Utils testing', ()=> {
    it('Should convert to number', () => {
        const res = parseAsInt('4');
        expect(res).to.be.eq(4);
    })

    it('Should drop error when isNaN true', () => {
        const value = 'asdasd';   
        expect(()=>parseAsInt(value)).to.throw(`${value} is not a number`);
    })
})