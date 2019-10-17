import React, { Component } from 'react';
import CardTableItem from './CardTableItem';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import { incrementcarditem, deletecarditems, decrementcarditem } from '../../store/Actions/UserSetting';
class CardTableItems extends Component{
    render(){
        const {Increment,items,DeleteCardItem,Decrement,currency} = this.props;
        return (
            <React.Fragment>
                {
                 items && items.map((item,index) => {
                     return (
                         <CardTableItem currency={currency} item={item} key={index} 
                         Decrement={Decrement}
                         Increment={Increment} DeleteCardItem={DeleteCardItem} />
                     );
                 })
                }
            </React.Fragment>
        );
    }
}

const mapState = state => {
    // console.log(state.firestore.ordered.card);
    return {
        items:state.firestore.ordered.card,
        uid:state.firebase.auth.uid,
        currency:state.firebase.profile.currency
    }
}

const mapDispatch = dispatch => {
    return {
        Increment:(id,qun) => dispatch(incrementcarditem(id,qun)),
        DeleteCardItem:(id) => dispatch(deletecarditems(id)),
        Decrement:(id,qun) => dispatch(decrementcarditem(id,qun)),
        AsynchronousStart:() => dispatch({type:'AsynchronousStart'}),
        AsynchronousFinish:() => dispatch({type:'AsynchronousFinish'}),
    }
}
export default compose(
    connect(mapState,mapDispatch),
    // firestoreConnect([{collection:'card'}])
    firestoreConnect(props => {
        // console.log(props);
        if(!props.items){
            props.AsynchronousStart();
        }else{
            props.AsynchronousFinish();
        }
        return [{
            collection:'card',
            where: [['uid', '==', props.uid]]
        }]
    })
)(CardTableItems);