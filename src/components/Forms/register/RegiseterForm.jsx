import React, { Component } from 'react';
import {composeValidators,combineValidators,isRequired} from 'revalidate';
import {reduxForm,Field} from 'redux-form';
import {connect} from 'react-redux';
import Textinput from '../common/Textinput';
import { Register } from '../../../store/Actions/AuthActions';
const validate = combineValidators({
    fname:isRequired({message:'First Name is required'}),
    lname:isRequired({message:'Last Name is required'}),
    email:isRequired({message:'Email is required'}),
    password:composeValidators(
        isRequired({message:'Password is required'})
    )()

})
class RegisterForm extends Component {
    submitVal = val => {
        this.props.register(val);
    }
    render(){
        return  (
            <form onSubmit={this.props.handleSubmit(this.submitVal)}>
                <Field name="fname" component={Textinput} type="text" placeholder="first name"/>
                <Field name="lname" component={Textinput} type="text" placeholder="last name"/>
                <Field name="email" component={Textinput} type="email" placeholder="email"/>
                <Field name="password" component={Textinput} type="password" placeholder="password"/>
                <input type="submit" value="Create"/>
            </form>
        );
    }
}
const mapState = state => {
    // console.log(state);
    return {
            
    }
}
const mapDispatch = dispatch => {
    return {
        register:(cred) => dispatch(Register(cred))
    }
}
export default connect(mapState,mapDispatch)(reduxForm({form:'userRegistrationForm',validate})((RegisterForm)));

