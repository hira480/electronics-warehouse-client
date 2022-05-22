import React from 'react';
import './footer.css';
import LogoImg from '../../images/LogoImg.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer mt-5'>
            <footer className='p-4'>
                <div className='container mt-4'>
                    <div className='row d-flex justify-content-between link'>

                        <div className='col-md-3 col-sm-12 item'>
                            <h4 className='mb-4'>About</h4>
                            <Link to=''>My Items</Link>
                            <Link to=''>Blogs</Link>
                            <Link to=''>Contact Us</Link>
                            <Link to=''>Product Quality</Link>
                            <Link to=''>Distributor</Link>
                        </div>
                        <div className='col-md-3 col-sm-12 item'>
                            <h4 className='mb-4'>Support</h4>
                            <Link to=''>Shipping Policy</Link>
                            <Link to=''>Maintenance</Link>
                            <Link to=''>Feedback</Link>
                            <Link to=''>Location</Link>
                        </div>
                        <div className='col-md-3 col-sm-12 item'>
                            <h4 className='mb-4'>Social</h4>
                            <Link to=''>Facebook</Link>
                            <Link to=''>Instagram</Link>
                            <Link to=''>Twiter</Link>
                            <Link to=''>LinkedIn</Link>
                            <Link to=''>Github</Link>
                        </div>
                        <div className='col-md-3 col-sm-12'>
                            <h4>Electronics Warehouse</h4>
                            <img src={LogoImg} alt="" />
                        </div>
                    </div>
                </div>
                <p className='text-center mt-5'><small>Copyright ©  {new Date().getFullYear()}</small></p>
            </footer>
        </div>


    );
};

export default Footer;