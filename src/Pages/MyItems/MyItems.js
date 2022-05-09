import { async } from '@firebase/util';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);
    useEffect(() => {
        const getItems = async (data) => {
            const email = user.email;
            const url = `http://localhost:5000/myItems?email=${email}`;
            fetch(url, {
                method: 'POST',
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
            <h2 className='text-primary text-center mt-3'>My Items</h2>
            {
                myItems.map(items => <div key={items._id}>
                    <p>{items.email} : {items.nmae}</p>
                </div>)
            }
        </div>
    );
};

export default MyItems;