import React from 'react';
import { useNavigate } from 'react-router-dom';

const AllProduct = ({ item, handleDelete }) => {
    const navigate = useNavigate();
    const { supplier, name, price, _id, quantity } = item;
    const handleSeeMore = (id) => {
        navigate(`/inventoryItem/${id}`);
    }
    return (
        <tr>
            <td>{name}</td>
            <td>{supplier}</td>
            <td>{price}</td>
            <td>{quantity > 0 ? quantity : 'sold out'}</td>
            <td className='d-flex justify-content-around'> <button onClick={() => handleSeeMore(_id)} className='btn btn-link'>Update</button>  </td>
        </tr>
    );
};

export default AllProduct;