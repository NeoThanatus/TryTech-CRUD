import React, { useState } from 'react';
import { Button, Checkbox, Form } from "semantic-ui-react";
import Read from './read';
import axios from 'axios';
import { useHistory } from 'react-router';


export default function Create() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const postData = () => {
        axios.post(`https://6525e3a867cfb1e59ce7bd34.mockapi.io/fakeData`, {
            firstName,
            lastName,
            checkbox
        }).then(() => {
            history.push('/')
        })
    }
    return (
        <div className="create-form">
            <Form >
                <Form.Field>
                    <label>Primeiro Nome</label>
                    <input placeholder='Primeiro Nome' onChange={(e) => setFirstName(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Ultimo Nome</label>
                    <input placeholder='Ultimo Nome' onChange={(e) => setLastName(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <Checkbox label='Concordo' onChange={(e) => setCheckbox(!checkbox)} />
                </Form.Field>
                <Button onClick={postData} type='submit'>Submeter</Button>

            </Form>
        </div>
    )
}

