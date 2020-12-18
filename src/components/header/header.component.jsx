import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo }  from '../../assets/icon.svg'
const header=()=>
{
    return(
        <div className='header'>
            <Link className='logo-container' to="/ECommwebsite/"><Logo className='logo'/></Link>
            <div className='options'>
            <Link className='option' to='/ECommwebsite/shop'>SHOP</Link>
            <Link className='option' to='/ECommwebsite/contact'>CONTACT US</Link>
            <Link className='option' to='/ECommwebsite/signin'>SIGN IN</Link>
            </div>
        </div>
    )
}

export default header;