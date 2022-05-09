import React from 'react';
import './inventory.css';
import useInventory from '../../../hooks/useInventory';
import InventoryItem from '../InventoryItem/InventoryItem';
import { Link } from 'react-router-dom';

const Inventory = () => {
    const [inventoris] = useInventory();
    return (
        <div className='container'>
            <h2 className='text-center text-primary my-4'>Inventories</h2>
            <div className='inventory-container'>
                {
                    inventoris.slice(0, 6).map(inventory => <InventoryItem
                        key={inventory._id}
                        inventory={inventory}
                    ></InventoryItem>)
                }
            </div>
            <div className='text-center mt-5'>
                <Link className='text-decoration-none' to='/manageItems'>Manage Inventories</Link>
            </div>
        </div>
    );
};

export default Inventory;