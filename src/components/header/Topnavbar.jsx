import React from 'react';
import {NavLink} from 'react-router-dom';
const Topnavbar = ({fname,currency,onCurrencyChange,auth,onLogout}) => {
    return (
        <div className="container">
            <ul className="left">
                <li>
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    0301-6405051
                </li>
                <li>
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    allinone644@gmail.com
                </li>
            </ul>
            <ul className="right">
                <li>
                    {fname ? fname:null}
                </li>
                <li>
                    {currency ? currency:null}
                    <ul className="dropdown">
                        <li onClick={() => onCurrencyChange('USD')}>
                            USD
                        </li>
                        <li onClick={() => onCurrencyChange('EUR')}>
                            EUR
                        </li>
                        <li onClick={() => onCurrencyChange('GBP')}>
                            GBP
                        </li>
                        <li onClick={() => onCurrencyChange('AUD')}>
                            AUD
                        </li>
                        <li onClick={() => onCurrencyChange('PKR')}>
                            PKR
                        </li>
                    </ul>
                </li>
                {
                    auth ? <li onClick={onLogout}>Logout</li>:
                    <React.Fragment>
                        <NavLink to="/login">
                        <li style={{color:'white'}}>Login</li>
                        </NavLink>
                        <NavLink to="/register">
                        <li style={{color:'white'}}>Register</li>
                        </NavLink>
                    </React.Fragment>
                }
            </ul>
        </div>
    );
};

export default Topnavbar;