import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import auth from '../../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../../Shared/Loading/Loading';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
    let errorText;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {
        errorText = <p className='text-danger'>Error: {error?.message}</p>
    }

    const loginButton = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
        signInWithEmailAndPassword(email, password);
    }

    const navigateRegister = event => {
        navigate('/register');
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        console.log(email);
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent password reset email');
        }
        else {
            toast('Please enter your email address');
        }
    }

    return (
        <div>
            <h2 className='text-center text-primary pt-3'>Please Login</h2>
            <div className='container form-width form-layout'>
                <Form onSubmit={loginButton} className='mb-2'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" ref={emailRef} name='email' placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <Button className='w-100' variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
                {errorText}
                <p>New to my Website? <Link to='/register' className='text-primary pe-auto text-decoration-none mt-2' onClick={navigateRegister}>Please Register</Link></p>
                <p>Forget Password?<Button variant="link" className='text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</Button></p>
                <SocialLogin></SocialLogin>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;