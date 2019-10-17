import React from 'react';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';
const Thirdbar = (props) => {
    const preventD = e => {
        e.preventDefault();
    }
    const goToHome = e => {
        e.preventDefault();
        props.history.push('/');
    }
    const goToCard = e => {
        e.preventDefault();
        props.history.push('/card');
    }
    return (
        <div className="thirdnavbar">
                <ul className="mainmenu">
                    <li><a href="/" onClick={goToHome}>Home</a></li>
                    <li><a href="/" onClick={goToCard}>Card</a></li>
                    <li><a href="/" onClick={preventD}>Catelog</a></li>
                    <li>
                        <a href="/" onClick={preventD}>
                            Shop
                            {/* <i className="fa fa-caret-down" aria-hidden="true"></i> */}
                        </a>
                    </li>
                    <li>
                        <a href="/" onClick={preventD}>
                        Pages
                        {/* <i className="fa fa-caret-down" aria-hidden="true"></i> */}
                        </a>
                    </li>
                    <li><a href="/" onClick={preventD}>Electronics</a></li>
                    <li><a href="/" onClick={preventD}>Appliances</a></li>
                    <li><a href="/" onClick={preventD}>Mobiles</a></li>
                </ul>
        </div>
    );
};

export default compose(withRouter)(Thirdbar);