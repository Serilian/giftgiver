import React, {Component} from 'react';
import {Form, FormGroup, FormControl, FormLabel, Button} from "react-bootstrap";

class Gift extends Component {

    constructor(props) {
        super(props);
        this.state = {
            person: '',
            present: ''
        }
    }

    handleChange = (e, field) => {
        this.setState({[field]: e.target.value})
    };

    render() {

        let {gift, removeGift} = this.props;

        return (
            <div className={'gift'}>
                <Form>
                    <FormGroup>
                        <FormLabel>Person</FormLabel>
                        <FormControl name="person" type="text" className={"input-person"}
                                     onChange={(e) => this.handleChange(e, 'person')}/>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Present</FormLabel>
                        <FormControl name='present' type="text" className={"input-present"}
                                     onChange={(e) => this.handleChange(e, 'present')}/>
                    </FormGroup>
                </Form>
                <Button className='btn-remove' variant="danger" onClick={() => removeGift(gift.id)}>Remove Gift</Button>
            </div>
        );
    }
}

export default Gift;