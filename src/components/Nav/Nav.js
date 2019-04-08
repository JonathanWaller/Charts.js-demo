import React from 'react';
import './Nav.css';

import { Link } from 'react-router-dom';


const Nav = () => {
    return(
        <div className = 'nav-wrapper'>
            <Link to ='/' className='link'>
                Home
            </Link>
            <Link to ='/charts' className='link'>
                <div>Charts</div>
            </Link>
        </div>
    )
};

export default Nav;