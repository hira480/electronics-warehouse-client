import React from 'react';
import './ProductDetail.css';
import { useParams } from 'react-router-dom';
import useProductDetrails from '../../hooks/useProductDetails';

const ProductDetail = () => {
    const { productId } = useParams();
    const [product] = useProductDetrails(productId);
    const { _id, name, price, quantity, supplier, description } = product;

    const manageDelivered = () => {
        const quantity = product.quantity;
        const newQuantity = quantity - 1;
        return newQuantity;
    }

    return (
        <div>
            <h2 className='text-center text-primary mt-3'>{name}</h2>
            <div className='container mt-5'>
                <div className='row d-flex justify-content-between align-items-center '>
                    <div className='col-md-6 col-sm-12 product-img'>
                        <img className='w-100' src={product.img} alt="" />
                    </div>
                    <div className='col-md-6 col-sm-12'>
                        <h5>Product Id: {_id}</h5>
                        <h5>Name: {name}</h5>
                        <h6>Price: ${price}</h6>
                        <h6>Quantity: {quantity}</h6>
                        <h6>Supplier: {supplier}</h6>
                        <p>{description}</p>
                        <button onClick={manageDelivered()} className='btn btn-success'>Delivered</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;