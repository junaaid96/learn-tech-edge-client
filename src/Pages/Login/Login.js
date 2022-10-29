import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../Contexts/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const Login = () => {
    const { existingUser, providerLogin, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const [validate, setValidate] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        console.log(form);
        const email = form.email.value;
        const password = form.password.value;

        existingUser(email, password)
            .then(userCredential => {
                const user = userCredential.user;
                console.log(user);
                setValidate('');
                form.reset();
                navigate(from, {replace: true});
            })
            .catch(error => {
                console.log(error);
                setValidate(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(
                userCredential => {
                    const user = userCredential.user;
                    console.log(user);
                    navigate(from, {replace: true});
                }
            )
            .catch(error => {
                console.error('Error: ', error);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
            .then(
                userCredential => {
                    const user = userCredential.user;
                    console.log(user);
                    navigate(from, {replace: true});
                }
            )
            .catch(error => {
                console.error('Error: ', error);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    return (
        <Form onSubmit={handleSubmit}>
            <h1 className='mb-5'>Login</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" required />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" required />
            </Form.Group>

            <Button variant="dark" type="submit">
                Login
            </Button>
            <p className='my-3'>New here? Go to <Link to="/registration" className='text-decoration-none fw-bold text-dark'>Registration</Link></p>
            <Form.Text className="text-danger">
                <p className='text-red-600'>{validate}</p>
            </Form.Text>
            <div className='my-5'>
                <Button onClick={handleGoogleSignIn} variant='outline-danger' className='mx-2'><FcGoogle /> Login with Google</Button>
                <Button onClick={handleGithubSignIn} variant='outline-success' className='mx-2'><FaGithub /> Login with Github</Button>
            </div>
        </Form>
    );
};

export default Login;


