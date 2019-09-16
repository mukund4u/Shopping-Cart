import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import  {signInWithGoogle} from '../../firebase/firebase.utils';

class SingIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password:''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email:'', password:''});
    }

    handleChange = event => {
        const {value , name} = event.target;
        this.setState({[name]: value});
    }

    render(){
        return(
            <div className='sign-in'>
                <h3>I Already have account</h3>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                       name='email'
                       type='email'
                       handleChange={this.handleChange}
                       value={this.state.email}
                       label='email'
                       required>
                    </FormInput>
                    <FormInput 
                       name='password'
                       type='password'
                       handleChange={this.handleChange}
                       value={this.state.password}
                       label='password'
                       required>
                    </FormInput>
                    <div className='buttons'>
                        <CustomButton type='submit' >Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign In with Google
                        </CustomButton>
                    </div>
               
                </form>
            </div>
        )
    }
}

export default SingIn;