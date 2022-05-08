import React from 'react';
import './SocialLogin.css';
import google from '../../../images/social/google.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../../Shared/Loading/Loading';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorText;

    if (loading) {
        return <Loading></Loading>
    }
    if (error) {
        errorText = <p className='text-danger'>Error: {error?.message}</p>
    }
    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            <div className='or'>
                <div className='line'><hr /></div>
                <div className='mx-2'>Or</div>
                <div className='line'><hr /></div>
            </div>
            {errorText}
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-outline-primary d-block mx-auto my-2 btn-width'>
                    <img height={32} src={google} alt="" />
                    <span className='px-2'>SignIn with Google</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;