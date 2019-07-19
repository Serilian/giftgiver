import React from 'react';
import {shallow} from 'enzyme';
import Gift from './Gift'

describe('Given Gift component', () => {
    let gift;
    let MOCK_INDEX = 1;
    const mockRemove = jest.fn();
    const props = {gift: {id: MOCK_INDEX}, removeGift: mockRemove};

    beforeEach(() => {
        gift = shallow(<Gift {...props}/>);
    });

    it('renders correctly', () => {
        expect(gift.debug()).toMatchSnapshot();
    });

    it('initializes present and person in `state`', () => {
        expect(gift.state()).toEqual({person: '', present: ''})
    });

    describe('When typing into the user input', () => {
        const MOCK_PERSON = 'Uncle';

        beforeEach(() => {
            gift.find('.input-person').simulate('change', {target: {value: MOCK_PERSON}});
        });

        it('updates the person in state', () => {
            expect(gift.state().person).toBe(MOCK_PERSON);
        });
    });

    describe('When typing into the present input', () => {
        const MOCK_GIFT = 'Gold fish';

        beforeEach(() => {
            gift.find('.input-present').simulate('change', {target: {value: MOCK_GIFT}});
        });

        it('updates the present in state', () => {
            expect(gift.state().present).toBe(MOCK_GIFT);
        });
    });

    describe("Given clicking remove button", () => {
       beforeEach(()=>{
          gift.find(".btn-remove").simulate("click");
       });

       it("calls the removeGift method from callback", ()=>{
            expect(mockRemove).toHaveBeenCalledWith(MOCK_INDEX);
       });

    });


});