import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo }  from '../../assets/icon.svg'

const header=()=>
{
    return(
        <div className='header'>
            <Link className='logo-container' to="/Ecommwebsite"><Logo className='logo'/></Link>
            <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact'>CONTACT US</Link>
            </div>
        </div>
    )
}

export default header;