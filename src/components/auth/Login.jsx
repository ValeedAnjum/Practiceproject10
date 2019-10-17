import React from 'react';
import LoginForm from '../Forms/register/LoginForm.jsx';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
const Login = ({auth}) => {
    if(auth){
        return <Redirect to="/" />
    }
    return (
        <div className="container Register">
            <div className="row">
                <div className="offset-sm-3 col-6">
                    <div className="registerform">
                        <LoginForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapState = state => {
    return {
        auth:state.firebase.auth.uid
    }
}
export default connect(mapState,null)(Login);