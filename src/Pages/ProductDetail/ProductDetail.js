import './ProductDetail.css';
import { useParams } from 'react-router-dom';
import useProductDetrails from '../../hooks/useProductDetails';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';

const ProductDetail = () => {
    const { productId } = useParams();
    const { register, reset, handleSubmit } = useForm();
    const [product, setProduct] = useProductDetrails(productId);
    const { _id, name, price, quantity, supplier, description } = product;
    let q = quantity;

    const manageDelivered = async (id) => {
        const deliveredQuantity = quantity - 1;
        const url = `https://safe-tundra-06373.herokuapp.com/product/${id}`;

        const { data } = await axios.put(url, { deliveredQuantity });
        setProduct(data);
        toast("Product delivered successfully");
    };

    const onSubmit = async (fdata) => {
        if (fdata.quantity > 0) {
            const deliveredQuantity = parseInt(quantity) + parseInt(fdata.quantity);
            const url = `https://safe-tundra-06373.herokuapp.com/product/${_id}`;
            const { data } = await axios.put(url, { deliveredQuantity });
            setProduct(data);
            toast("Quantity added successfully");
            reset({ quantity: '' });
        }
        else {
            toast.warn("Warning! Quantity can't be less than Zero");
            reset({ quantity: '' });
        }
    };


    // const manageDelivered = () => {
    //     const quantity = product.quantity;
    //     console.log(quantity);
    //     const newQuantity = quantity - 1;
    //     console.log(newQuantity);
    //     setItemQuentity(product.newQuantity);
    // }
    // const insertItem = event => {
    //     event.preventDefault();
    //     const amount = event.target.amount.value;
    //     console.log(amount);
    // }

    return (
        <div>
            <h2 className='text-center text-primary mt-3'>{name}</h2>
            <div className='container mt-5'>
                <div className='row d-flex g-4 justify-content-between align-items-center '>
                    <div className='col-md-6 col-sm-12 product-img'>
                        <img className='w-100' src={product.img} alt="" />
                    </div>
                    <div className=' col-md-6 col-sm-12'>
                        <h5>Product Id: {_id}</h5>
                        <h5>Name: {name}</h5>
                        <h6>Price: ${price}</h6>
                        <h6>Quantity: {quantity}</h6>
                        <h6>Supplier: {supplier}</h6>
                        <p>{description}</p>

                        <button disabled={q === 0} onClick={() => manageDelivered(_id)} className='btn btn-success'>Delivered</button>

                        <div className='form-width mt-3'>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input
                                    placeholder="Insert Amount"
                                    type="number"
                                    {...register("quantity", { required: true })}
                                />
                                <input className='btn btn-primary mt-2' value='Re-Stock' type="submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;