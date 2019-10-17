import React from 'react';
import {connect} from 'react-redux';
import { additemtocard } from '../../store/Actions/UserSetting';
const ItemList = (props) => {
    const {item,AddItemToCard,currency} = props;
    const {picture,name,price} = item;
    let Price;
    if(currency){
        switch (currency) {
            case 'PKR':
                Price = price * 155.75;
                break;
            case 'USD':
                Price = price;
                break;
            case 'EUR':
                Price = price * 0.90;
                break;
            case 'AUD':
                Price = price * 1.48;
                break;
            case 'GBP':
                Price = price * 0.78;
                break;
            default:
                break;
        }
    }
    return (
        <React.Fragment>
            <div className="col-6 col-sm-3 mb-3">
                <div className="item">
                    <img
                    src={picture}
                    alt="p1"/> 
                    <div className="options">
                        <i className="fa fa-eye" aria-hidden="true"></i>
                        <i className="fa fa-link" aria-hidden="true"></i>
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <i className="fa fa-signal" aria-hidden="true"></i>
                    </div>
                    <p className="itemHeading">{name}</p>
                    <div className="hr"></div>
                </div>
                <div className="cardPriceRating">
                    <p className="itemPrice">
                        {
                            currency ? (currency + " " + Price):('$ '+price)
                        }
                    </p>
                    <i className="fa fa-shopping-cart" aria-hidden="true" onClick={() => AddItemToCard(item)}></i>
                    <div className="clr"></div>
                </div>
            </div>
        </React.Fragment>
    );
};

const mapDispatch = dispatch => {
    return {
        AddItemToCard:item => dispatch(additemtocard(item))
    }
}
export default connect(null,mapDispatch)(ItemList);