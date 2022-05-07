import React from 'react';
import './InventoryItem.css';
import { useNavigate } from 'react-router-dom';

const InventoryItem = ({ inventory }) => {
    const { id, name, price, img, description, quantity, supplier } = inventory;
    const navigate = useNavigate()
    const navigateToStockInfo = id => {
        navigate(`/inventoryItem/${id}`)
    }
    return (
        <div className='inventoryItem'>
            <img className='w-100' src={img} alt="" />
            <div className='inventory-detail'>
                <h2>{name}</h2>
                <h5>Price: ${price}</h5>
                <h6>Quantity: {quantity}</h6>
                <h6>Supplier: {supplier}</h6>
                <p>{description}</p>
                <div className='d-flex justify-content-center my-2'>
                    <button onClick={() => navigateToStockInfo(id)} className='btn btn-primary'>Stoke Update</button>
                </div>

            </div>
        </div>
    );
};

export default InventoryItem;