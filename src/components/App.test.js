import React from 'react';
import {shallow} from 'enzyme';
import App from './App.js';

describe('app component', () => {
    let app;
    const MOCK_INDEX = 1;

    beforeEach(() => {
            app = shallow(<App/>);
        }
    );

    it('renders correctly', () => {
        expect(app.debug()).toMatchSnapshot();
    });

    it('initializes the `state` with empty list of gifts', () => {
        expect(app.state().gifts).toEqual([]);
    });


    describe('When clicking add gift button', () => {

        beforeEach(()=>{
            app.find('.btn-add').simulate('click');
        });
        afterEach(()=>{
            app.setState({gifts: []})
        });

        it('then adds new gift to `state`', () => {
            expect(app.state().gifts).toEqual([{id: MOCK_INDEX}]);
        });

        it("then adds new div to rendered list", () => {
            expect(app.find(".gift-list").children().length).toEqual(MOCK_INDEX);
        });

        it('creates a gift component', ()=>{
            expect(app.find('Gift').exists()).toBeTruthy();
        });
    });

    describe('When user wants to remove added gift', () => {
        beforeEach(()=>{
           app.instance().removeGift(MOCK_INDEX);
        });

        it("removes the gift fom state", ()=>{
            expect(app.state().gifts).toEqual([]);
        });

    })


});


