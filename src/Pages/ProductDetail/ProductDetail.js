import React, { useState } from 'react';
import './ProductDetail.css';
import { useParams } from 'react-router-dom';
import useProductDetrails from '../../hooks/useProductDetails';
import { Button, Form } from 'react-bootstrap';

const ProductDetail = () => {
    const { productId } = useParams();
    const [product] = useProductDetrails(productId);
    const { _id, name, price, quantity, supplier, description } = product;

    const [itemQuantity, setItemQuentity] = useState(0);

    const manageDelivered = () => {
        const quantity = parseInt(product.quantity.value);
        const newQuantity = quantity - 1;
        setItemQuentity(newQuantity);
    }
    const insertItem = event => {
        event.preventDefault();
        const amount = event.target.amount.value;
        console.log(amount);
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
                        <button onClick={() => manageDelivered(itemQuantity)} className='btn btn-success'>Delivered</button>
                        <div className='form-width'>
                            <Form onSubmit={insertItem} className='mt-2'>
                                <h5>Restoke Item</h5>
                                <Form.Group className="mb-2" controlId="formBasicText">
                                    <Form.Control type="text" name='amount' placeholder="Enter Amount" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Insert Item
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;