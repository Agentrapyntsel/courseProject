import React from 'react';
import { auth } from '../../firebase';
import { Link,useHistory  } from 'react-router-dom';

import "./nav.scss"

export const Navigation =()=>{

   const history = useHistory();

    const handleLogout = () => {
        auth.signOut();

        history.push('/login');
    };
        return (
            <nav className = 'navigation'>
                <div >
                    <ul className = 'navigation-links-container'>
                        <li ><Link className = 'navigation-link' to='/'>Home</Link></li>
                        <li ><Link className = 'navigation-link' to='/civilizations'>Civilizations</Link></li>
                        <li ><Link className = 'navigation-link' to='/units'>Units</Link></li>
                        <li ><Link className = 'navigation-link' to='/structures'>Structures</Link></li>
                        <li ><Link className = 'navigation-link' to='/technologies'>Technologies</Link></li>
                    </ul>
                </div>
                <img src='https://igromagnit.net/uploads/posts/2019-07/1564025262_age-of-empires-definitive-edition-logo.png'
                     alt='logo' className='navigation-logo'/>
                <div className = 'navigation-btn'>
                    <button className='gradient-btn' onClick={handleLogout}>Log out</button>
                </div>
            </nav>
        )
}

export default Navigation;
