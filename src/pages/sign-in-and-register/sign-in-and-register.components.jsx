import React from 'react';

import Signin from '../../components/sign-in/sign-in.component';
import Register from '../../components/register/register.component';
import './sign-in-and-register.styles.scss';

const SignInandReg=()=>
{
    return(
    <div className='sign-in-and-reg'>
        <Signin />
        <Register/>
    </div>)
}

export default SignInandReg;