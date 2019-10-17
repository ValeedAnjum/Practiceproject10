import React from 'react';
import Topnavbar from './Topnavbar';
import Secondbar from './Secondbar';
import Thirdbar from './Thirdbar';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {currency} from '../../store/Actions/UserSetting';
import {Logout} from '../../store/Actions/AuthActions';
const Header = ({profile,onCurrencyChange,auth,onLogout}) => {
    const {fname,currency} = profile;
    return (
        <div className="Header">
            <Topnavbar 
            fname={fname} 
            currency={currency} 
            onCurrencyChange={onCurrencyChange} 
            onLogout={onLogout}
            auth={auth}/>
            <Secondbar itemqun={50}/>
            <Thirdbar />
        </div>
    );
};

const mapState = state => {
    return {
        profile:state.firebase.profile,
        auth:state.firebase.auth.uid        
    }
}
const mapDispatch = dispatch => {
    return {
        onCurrencyChange:(currencyName) => dispatch(currency(currencyName)),
        onLogout:() => dispatch(Logout())
    }
}
export default compose(connect(mapState,mapDispatch))(Header);
