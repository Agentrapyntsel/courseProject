import { useContext } from 'react';
import { useHistory, Link, Redirect } from 'react-router-dom';
import { auth } from '../../firebase';
import { AuthContext } from '../../context/AuthContextProvider';

import "./login.scss"

const Login = () => {
    const history = useHistory();
    const { currentUser } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;

        await auth.signInWithEmailAndPassword(email.value, password.value);

        history.push('/');
        try {
        } catch (e) {
            console.dir(e);
        }
    };

    return currentUser ? (
        <Redirect to='/' />
    ) : (
        <section className='login-wrapper'>
            <form className='login-form' onSubmit={handleSubmit}>
                <h1 className='login-form-header'>Welcome <br/>to Age of empires info page </h1>
                <label>
                    Email
                    <input className='login-form-email' name='email' type='email' placeholder='email'/>
                </label>
                <br/>
                <label>
                    Password
                    <input className='login-form-password' name='password' type='password' placeholder='password'/>
                </label><br/>
                <div className='login-form-btn'>
                    <button type='submit'>Log In</button>
                </div>
                <div><Link className='login-form-signup' to='/signup'>Sign Up</Link></div>
            </form>

        </section>
    );
};

export default Login;