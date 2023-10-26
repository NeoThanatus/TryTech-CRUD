import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from 'semantic-ui-react';
import { Link } from "react-router-dom";

export default function Read() {
    type DataType = {
        id: number;
        firstName: string;
        lastName: string;
        checkbox: boolean;
    }
    const [APIData, setAPIData] = useState<DataType[]>([]);
    useEffect(() => {
        axios.get(`https://6525e3a867cfb1e59ce7bd34.mockapi.io/fakeData`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, []);

    const setData = (data: DataType) => {
        let { id, firstName, lastName, checkbox } = data;
        localStorage.setItem('ID', id.toString());
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox.toString())
    }

    const getData = () => {
        axios.get(`https://6525e3a867cfb1e59ce7bd34.mockapi.io/fakeData`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }

    const onDelete = (id: number) => {
        axios.delete(`https://6525e3a867cfb1e59ce7bd34.mockapi.io/fakeData/${id}`)
        .then(() => {
            getData();
        })
    }

    return (
        <div className="">
            <Table singleLine className="table-fixed">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Nome</Table.HeaderCell>
                        <Table.HeaderCell>Sobrenome</Table.HeaderCell>
                        <Table.HeaderCell>Checado</Table.HeaderCell>
                        <Table.HeaderCell>Editar</Table.HeaderCell>
                        <Table.HeaderCell>Deletar</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.firstName}</Table.Cell>
                                <Table.Cell>{data.lastName}</Table.Cell>
                                <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                                <Link to='/update'>
                                    <Table.Cell> 
                                        <button onClick={() => setData(data)}>Editar</button>
                                    </Table.Cell>
                                </Link>
                                <Table.Cell>
                                    <button onClick={() => onDelete(data.id)}>Excluir</button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}