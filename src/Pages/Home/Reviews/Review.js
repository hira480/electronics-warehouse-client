import React from 'react';
import './Review.css';
import { Card } from 'react-bootstrap';

const Review = ({ review }) => {
    const { name, reviewText } = review;
    return (
        <div className='container'>
            <div>
                <Card >
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{reviewText} </Card.Text>
                    </Card.Body>
                </Card>
            </div>

        </div>
    );
};

export default Review;