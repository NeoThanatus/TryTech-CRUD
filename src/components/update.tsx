import React, {useState,useEffect} from "react";
import { Button,Checkbox,Form } from "semantic-ui-react";
import axios from "axios";
import { useHistory } from "react-router-dom";


export default function Update(){
    let history = useHistory();
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [checkbox, setCheckbox] = useState<boolean>(false);
    const [id, setId] = useState<number | null>(null);

    useEffect(() => {
        setId(Number(localStorage.getItem('ID')));
        setFirstName(localStorage.getItem('First Name') || '');
        setLastName(localStorage.getItem('Last Name') || '');
        setCheckbox(Boolean(localStorage.getItem('Checkbox')));
    },[]);

    const updateAPIData = () => {
        axios.put(`https://6525e3a867cfb1e59ce7bd34.mockapi.io/fakeData/${id}`,{
            firstName,
            lastName,
            checkbox
        }).then(() => {
            history.push('/read');
        })
    }

    return(
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Primeiro Nome</label>
                    <input placeholder='Primeiro nome' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Sobrenome</label>
                    <input placeholder='Sobrenome'value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='Concordo' checked={checkbox} onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Field>
                <Button type='submit' onClick={updateAPIData}>Editar</Button>
            </Form>
        </div>
    )
}