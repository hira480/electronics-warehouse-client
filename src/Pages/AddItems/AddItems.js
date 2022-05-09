import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const AddItems = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = 'https://safe-tundra-06373.herokuapp.com/product';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };

    return (
        <div>
            <h2 className='text-primary text-center mt-3'>Add Items</h2>
            <div className=' container form-width form-layout'>

                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-3' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                    <input className='mb-3' placeholder='Price' type="number" {...register("price")} />
                    <input className='mb-3' placeholder='Quantity' type="number" {...register("quantity")} />
                    <input className='mb-3' placeholder='Supplier' {...register("supplier", { required: true, maxLength: 20 })} />
                    <textarea className='mb-3' placeholder='Description' {...register("description")} />
                    <input className='mb-3' placeholder='Photo URL' type="text" {...register("img")} />
                    <Button className='w-100' variant="primary" type="submit">Add Item</Button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;