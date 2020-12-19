import React from 'react';

import './sign-in.styles.scss';
import Formin from '../form-input/form-input.component';
import CButton from '../custom-button/custom-button.component';

import {signInWithGoogle} from '../../firebase/firebase.utils';
class signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ email: '', password: '' })
    }
    handleChange=(event)=>{
        const {value,name}= event.target;
        this.setState({[name]:value})
    }


    render() {
        return (
            <div className='signin'>
                <h2>Already have an account?</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <Formin 
                    name="email" 
                    type="email" 
                    value={this.state.email}
                    handleChange={this.handleChange} 
                    label="email"
                    required />
                    <Formin 
                    name="password" 
                    type="password" 
                    value={this.state.password} 
                    handleChange={this.handleChange}
                    label="password"
                    required />
                    <div className='buttons'>
                    <CButton type='submit'> Sign in </CButton>
                    <CButton onClick={signInWithGoogle} isGoogleSignIn>
                    Sign in with Google
                    </CButton>
                </div>
                </form>
            </div>
        )
    }
}

export default signin;