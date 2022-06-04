import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);
    useEffect(() => {
        const getItems = async (data) => {
            const email = user.email;
            const url = `http://localhost:5000/myItems?email=${email}`;
            console.log(url);
            await fetch(url, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(result => {
                    setMyItems(result);
                })
        };
        getItems(user);

    }, [user]);
    return (
        <div className='container'>
            <h2 className='text-primary text-center mt-3'>My Items{myItems.length}</h2>
            {
                myItems.map(items => <div key={items._id}>
                    <p>{items.email} : {items.nmae}</p>
                </div>)
            }

            <Table responsive striped bordered hover className='mt-5'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>

        </div>
    );
};

export default MyItems;