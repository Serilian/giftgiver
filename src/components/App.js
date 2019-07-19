import React, {Component} from 'react';
import {Button} from "react-bootstrap";
import Gift from './Gift';
import {maxNumber} from "../helper";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            gifts: []
        };
    }

    addGift = () => {
        const {gifts} = this.state;
        const ids = gifts.map(gift=> gift.id);
        gifts.push({id: maxNumber(ids) + 1});
        this.setState({gifts});
    };

    removeGift = (id)=> {
        const updatedGifts = this.state.gifts.filter(gift => gift.id !== id);
        this.setState({gifts: updatedGifts});
    };

    render() {
        return (
            <div>
                <h2>Gift Giver</h2>
                <div className={"gift-list"}>{this.state.gifts.map(gift=>(
                    <Gift
                        gift={gift}
                        removeGift={this.removeGift}
                        key={gift.id}>Gift</Gift>
                ))}</div>
                <Button variant='primary' className='btn-add' onClick={this.addGift}>Add gift</Button>
            </div>
        );
    }
}

export default App;