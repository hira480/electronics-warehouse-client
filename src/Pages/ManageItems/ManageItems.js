import React from 'react';
import './ManageItems.css';
import useInventory from '../../hooks/useInventory';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ManageItems = () => {
    const [inventory, setInventory] = useInventory();
    const navigate = useNavigate();

    const handelAddItem = e => {
        navigate('/addItems')
    }
    const handelDelete = id => {
        const proceed = window.confirm('It will also delete from Database. Are you sure you want to delete this Item?');
        if (proceed) {
            const url = `https://safe-tundra-06373.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = inventory.filter(product => product._id !== id);
                    setInventory(remaining);
                })
        }
    }

    return (
        <div className='container'>
            <h2 className='text-primary text-center my-3'>Manage Items</h2>
            <div className='text-center mt-3'>
                <Button onClick={handelAddItem} variant="outline-success">Add New Items</Button>
            </div>
            {
                inventory.map(product =>
                    <div key={product._id} className='product custom-width mx-auto'>
                        <div className='detail d-flex justify-content-between align-items-center'>
                            <div className='d-flex justify-content-start '>
                                <img height='80px' src={product.img} alt="" />
                                <div className='justify-content-start align-items-center ms-3'>
                                    <h6>{product.name}</h6>
                                    <h6>$ <span style={{ color: 'orange' }}>{product.price}</span></h6>
                                    <p className='mb-0'>Quantity: {product.quantity}</p>
                                </div>
                            </div>
                            <div>
                                <Button onClick={() => handelDelete(product._id)} variant="danger">Delete</Button>
                            </div>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default ManageItems;