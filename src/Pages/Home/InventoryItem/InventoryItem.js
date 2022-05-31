import React from 'react';
import './InventoryItem.css';
import { useNavigate } from 'react-router-dom';

const InventoryItem = ({ inventory }) => {
    const { _id, name, price, img, description, quantity, supplier } = inventory;
    const navigate = useNavigate()
    const navigateToStockInfo = id => {
        navigate(`/inventoryItem/${id}`)
    }
    return (
        <div className='inventoryItem'>
            <img className='w-100' src={img} alt="" />
            <div className='inventory-detail px-4'>
                <h3>{name}</h3>
                <h5>Price: ${price}</h5>
                <h6>Quantity: {quantity}</h6>
                <h6>Supplier: {supplier}</h6>
                <p>{description.slice(0, 40)}..</p>
                <div className='d-flex justify-content-center my-2'>
                    <button onClick={() => navigateToStockInfo(_id)} className='btn btn-primary'>Stoke Update</button>
                </div>

            </div>
        </div>
    );
};

export default InventoryItem;