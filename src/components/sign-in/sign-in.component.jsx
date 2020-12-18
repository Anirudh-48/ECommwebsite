import React from 'react';

import './sign-in.styles.scss';
import Formin from '../form-input/form-input.component';

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
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default signin;