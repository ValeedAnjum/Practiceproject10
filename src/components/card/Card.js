import React from 'react';
import CardTableHeading from './CardTableHeading';
import CardTableItems from './CardTableItems';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
const Card = ({auth}) => {
    if(!auth){
        return <Redirect to="/" />
    }
    return (
        <div className="container-fluid card">
            <CardTableHeading />
            <CardTableItems />
        </div>
    );
};

const mapState = state => {
    return {
        auth:state.firebase.auth.uid
    }
}

export default connect(mapState,null)(Card);