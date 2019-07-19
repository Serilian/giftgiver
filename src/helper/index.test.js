import {maxNumber} from "./index";

describe("maxNumber", ()=> {
    describe("given an empty array", ()=>{
        it('returns 0 for an empty array', ()=>{
            expect(maxNumber([])).toEqual(0);
        });

    });

    describe("given an array of items", ()=>{
        it("returns highest number", ()=>{
            expect(maxNumber([1,7,6,4,5])).toEqual(7);
        })
    });
});