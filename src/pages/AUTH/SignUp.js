import { useHistory, Link } from 'react-router-dom';
import { auth } from "../../firebase";

import './login.scss'

const SignUp = () => {
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;

        await auth.createUserWithEmailAndPassword(email.value, password.value);

        history.push('/');
        try {
        } catch (e) {
            console.dir(e);
        }
    };

    return (

        <div className='signup-wrapper'>
            <div><img className='signup-img' alt='building' src='https://st.weblancer.net/download/963462_935xp.jpg'/></div>
            <form className='login-form' onSubmit={handleSubmit}>
                <h1 className='login-form-header'>Sign Up</h1>
                <label>
                    Email
                    <input className='login-form-email' name='email' type='email' placeholder='email'/>
                </label><br/>
                <label>
                    Password
                    <input className='login-form-password' name='password' type='password' placeholder='password'/>
                </label><br/>
                <div className='login-form-btn'>
                    <button className='gradient-btn' type='submit'>Sign Up</button>
                    <br/></div>
                <Link className='login-form-signup' to='/login'>Log in</Link>
            </form>
            <div><img className='signup-img' alt='building' src='https://ru.wiki.elvenar.com/images/a/ae/P_Elves_Workshop_30.png'/></div>
        </div>
    );
};

export default SignUp;