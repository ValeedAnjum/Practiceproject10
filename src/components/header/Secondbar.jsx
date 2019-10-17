import React from 'react';
import icon from './shop.svg';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
const Secondbar = (props) => {
    const dropdownToggle = e => {
        document.getElementById('catedropdown').classList.toggle('dBlock');
    }
    const goToHome = () => {
        props.history.push('/');
    }
    const goToCard = () => {
        props.history.push('/card');
    }
    const {items,auth} = props;
    let itemQun;
    if(items){
        itemQun = items.length;
    }
    if(!auth){
        itemQun = 0;
    }
    return (
        <div className="container">
                <div className="search">
                    <div className="logo">
                        <img src="https://cdn.shopify.com/s/files/1/2444/0831/t/2/assets/logo.png?0"
                        onClick={goToHome}
                        alt="logo"/>
                    </div>
                    <div className="searchinput">
                        <ul className="categories">
                            <li onClick={dropdownToggle}>All categories
                                <i className="fa fa-angle-down" aria-hidden="true"></i>
                                <ul className="catedropdown" id="catedropdown">
                                <li>Home</li>
                                <li>Catelog</li>
                                <li>Shop</li>
                                <li>Pages</li>
                                <li>Electronics</li>
                                <li>Appliances</li>
                                <li>Mobiles</li>
                                </ul>
                            </li>
                        </ul>
                        <input type="text" className="searchbar" autoComplete="on" placeholder="Search...">
                            
                        </input>
                        <button className="inputButton">
                                <i className="fa fa-search" aria-hidden="true"></i>
                        </button>
                    </div>
                    <div className="card-wishlist">
                        <div className="wishlist">
                            <i className="fa fa-heart-o" aria-hidden="true"></i>
                            <p></p>
                        </div>
                        <div className="cart" onClick={goToCard}>
                            <img src={icon} alt="cart"/>
                            <p className="orderquantity">
                            {
                                itemQun ? itemQun : 0
                            }
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    );
};

const mapState = state => {
    return {
        auth:state.firebase.auth.uid,
        items:state.firestore.ordered.card
    }
}
export default compose(
    connect(mapState,null),
    withRouter,
    firestoreConnect(props => {
        if(props.auth){
            return [{
                collection:'card',
                where: [['uid', '==', props.auth]]
            }] 
        }else{
            return [{
                collection:'something',
                // where: [['uid', '==', props.auth]]
            }]
        }
    })
)(Secondbar);