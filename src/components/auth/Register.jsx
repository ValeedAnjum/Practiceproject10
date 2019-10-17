import React from 'react';
import RegiseterForm from '../Forms/register/RegiseterForm';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
const register = ({auth}) => {
    if(auth){
        return <Redirect to="/" />
    }
    return (
        <div className="container Register">
            <div className="row">
                <div className="offset-sm-3 col-6">
                    <div className="registerform">
                        <RegiseterForm />
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

export default connect(mapState,null)(register);