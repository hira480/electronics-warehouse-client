import React from 'react';
import './BusinessDeals.css';
import { FaThumbsUp, FaFlag, FaDatabase, FaChartArea } from 'react-icons/fa';

const BusinessDeals = () => {
    return (
        <div className='bg-light my-5'>

            <div className='review-container py-5 container'>
                <div className='text-center'>
                    <FaChartArea size={70} className='mb-2 text-secondary' />
                    <h3>Revinue</h3>
                    <p>Our anoual revinue is increasing day by day. People know about our products and trust us.</p>
                </div>
                <div className='text-center'>
                    <FaDatabase size={70} className='mb-2 text-secondary' />
                    <h3>Storage</h3>
                    <p>Our storage quantity is high. We can store more then 10000 products at a time in our warehouse.</p>
                </div>
                <div className='text-center'>
                    <FaThumbsUp size={70} className='mb-2 text-secondary' />
                    <h3>Feedbacks</h3>
                    <p>Always we focuse on our customers feedback. After using our products they give us there feedback</p>
                </div>
                <div className='text-center'>
                    <FaFlag size={70} className='mb-2 text-secondary' />
                    <h3>Countries</h3>
                    <p>We delivered our products more then 78 countries around the world. Our brand is internationally femous</p>
                </div>
            </div>
        </div>
    );
};

export default BusinessDeals;