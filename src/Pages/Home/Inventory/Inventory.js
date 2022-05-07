import React from 'react';
import './inventory.css';
import useInventory from '../../../hooks/useInventory';
import InventoryItem from '../InventoryItem/InventoryItem';

const Inventory = () => {
    const [inventoris] = useInventory();
    return (
        <div className='container'>
            <h2 className='text-center text-primary my-4'>Inventories</h2>
            <div className='inventory-container'>
                {
                    inventoris.slice(0, 6).map(inventory => <InventoryItem
                        key={inventory.id}
                        inventory={inventory}
                    ></InventoryItem>)
                }
            </div>
        </div>
    );
};

export default Inventory;