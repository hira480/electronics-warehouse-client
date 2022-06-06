import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./../../firebase.init";
import { Table } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import AllProduct from "./AllProduct";


const MyItems = () => {
    const [user] = useAuthState(auth);
    const [products, setProducts] = useState([]);
    const getOrders = async () => {
        const email = user?.email;
        const url = `https://safe-tundra-06373.herokuapp.com/product?email=${email}`;
        const { data } = await axios.get(url);
        setProducts(data);
    };
    getOrders();
    const handleDelete = (id) => {
        const process = window.confirm("Are you sure?");
        if (process) {
            const url = `https://safe-tundra-06373.herokuapp.com/product/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    const remaining = products.filter((p) => p._id !== id);
                    setProducts(remaining);
                    toast('Deleted a product')
                });
        }
    };
    return (
        <div>

            <h2 className="text-primary text-center mt-3">My Items</h2>
            <Table className="container my-4" bordered hover>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Supplier Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((p) => (
                        <AllProduct
                            key={p._id}
                            handleDelete={handleDelete}
                            item={p}
                        ></AllProduct>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default MyItems;









// import React, { useEffect, useState } from 'react';
// import { Table } from 'react-bootstrap';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../../firebase.init';

// const MyItems = () => {
//     const [user] = useAuthState(auth);
//     const [myItems, setMyItems] = useState([]);
//     useEffect(() => {
//         const getItems = async (data) => {
//             const email = user.email;
//             const url = `https://safe-tundra-06373.herokuapp.com/myItems?email=${email}`;
//             console.log(url);
//             await fetch(url, {
//                 method: 'GET',
//                 headers: {
//                     'content-type': 'application/json'
//                 },
//                 body: JSON.stringify(data)
//             })
//                 .then(res => res.json())
//                 .then(result => {
//                     setMyItems(result);
//                 })
//         };
//         getItems(user);

//     }, [user]);
//     return (
//         <div className='container'>
//             <h2 className='text-primary text-center mt-3'>My Items{myItems.length}</h2>
//             {
//                 myItems.map(items => <div key={items._id}>
//                     <p>{items.email} : {items.nmae}</p>
//                 </div>)
//             }


//         </div>
//     );
// };

// export default MyItems;