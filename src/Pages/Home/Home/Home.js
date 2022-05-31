import React from 'react';
import Banner from '../Banner/Banner';
import BusinessDeals from '../Business/BusinessDeals';
import Inventory from '../Inventory/Inventory';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventory></Inventory>
            <BusinessDeals></BusinessDeals>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;