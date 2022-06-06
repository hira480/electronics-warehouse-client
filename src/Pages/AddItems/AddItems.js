import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddItems = () => {
    // const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);

    const handleSubmit = e => {
        e.preventDefault();

        const supplier = e.target.supplier.value;
        const name = e.target.name.value;
        const email = e.target.email.value;
        const description = e.target.description.value;
        const price = e.target.price.value;
        const img = e.target.img.value;
        const quantity = e.target.quantity.value;
        const item = { supplier, name, email, description, img, price, quantity }

        fetch('https://safe-tundra-06373.herokuapp.com/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                toast("Product added successfully easy!");
                e.target.reset()
            })
    }

    // const onSubmit = data => {
    //     // const email = user.email;
    //     console.log(data);
    //     const url = 'https://safe-tundra-06373.herokuapp.com/product';
    //     fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     })
    //         .then(res => res.json())
    //         .then(result => {
    //             console.log(result);
    //         })
    // };

    return (
        <div>
            <h2 className='text-primary text-center mt-3'>Add Items</h2>
            <div className=' container form-width form-layout'>
                <Form onSubmit={handleSubmit} className="w-100 mx-auto my-3">
                    <Form.Group className="mb-2" controlId="formGridEmail">
                        <Form.Control required value={user?.email} readOnly name='email' type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formGridName">
                        <Form.Control required name='supplier' type="text" placeholder="Supplier Name" />
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formGridName">
                        <Form.Control required name='name' type="text" placeholder="Product Name" />
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formGridAddress1">
                        <Form.Control required name='img' type='text' placeholder="https://image.jpg" />
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formGridAddress2">
                        <Form.Control name='description' type="text" placeholder="Item Info" />
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formGridAddress2">
                        <Form.Control name='price' type="number" placeholder="Price" />
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formGridAddress2">
                        <Form.Control name='quantity' type="number" placeholder="Quantity" />
                    </Form.Group>

                    <Button className='w-100' variant="primary" type="submit">
                        Add Item
                    </Button>
                </Form>

                {/* <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-3' value={user?.email} {...register("email", { required: true, maxLength: 20 })} readOnly />

                    <input className='mb-3' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                    <input className='mb-3' placeholder='Price' type="number" {...register("price")} />
                    <input className='mb-3' placeholder='Quantity' type="number" {...register("quantity")} />
                    <input className='mb-3' placeholder='Supplier' {...register("supplier", { required: true, maxLength: 20 })} />
                    <textarea className='mb-3' placeholder='Description' {...register("description")} />
                    <input className='mb-3' placeholder='Photo URL' type="text" {...register("img")} />
                    <Button className='w-100' variant="primary" type="submit">Add Item</Button>
                </form> */}
            </div>
        </div>
    );
};

export default AddItems;