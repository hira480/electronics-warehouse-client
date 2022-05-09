import React from 'react';
import './ManageItems.css';
import useInventory from '../../hooks/useInventory';
import { Button } from 'react-bootstrap';

const ManageItems = () => {
    const [inventory, setInventory] = useInventory();

    return (
        <div className='container'>
            <h2 className='text-primary text-center mt-3'>Manage Items</h2>
            {
                inventory.map(product =>
                    <div key={product._id} className='product'>
                        <div className='detail d-flex justify-content-between align-items-center'>
                            <h6>{product.name}</h6>
                            <h6>$ {product.price}</h6>
                            <Button variant="danger">Delete</Button>
                        </div>

                    </div>)
            }
        </div>
    );
};

export default ManageItems;