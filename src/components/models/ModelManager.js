import React, { Component } from 'react'
import {connect} from 'react-redux';
import Loader from './loader';
class ModelManager extends Component {
    render() {
        const {name} = this.props;
        // console.log(message);
        switch (name) {
            case 'AsynchronousStart':
                return <Loader />
            default:
                return null;
        }
    }
}
const mapState = state => {
    return {
        name:state.model.name,
        message:state.model.message
    }
}
export default connect(mapState)(ModelManager);