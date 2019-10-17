import React from 'react';

const CardTableItem = ({item,Increment,DeleteCardItem,Decrement,currency}) => {
    const {name,picture,price,quantity,id} = item;
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
        <div className="row cardTableItems">
        <div className="col-4">
            <div className="row">
                <div className="col-6">
                    <img src={picture} alt={name}/>
                </div>
                <div className="col-6">
                    <h4>{name}</h4>
                </div>
            </div>
        </div>
        <div className="col-2">
            <p className="price">
                {
                    currency ? (currency + " " + Price):("$ " + price)
                }
            </p>
        </div>
        <div className="col-2">
            <div className="quantityContainer">
                <button onClick={() => Decrement(id,quantity)}>-</button>
                <p className="quantity">
                    {quantity}
                </p>
                <button onClick={() => Increment(id,quantity)}>+</button>
            </div>
        </div>
        <div className="col-2">
            <p className="total">
                {
                    quantity*Price
                }
            </p>
        </div>
        <div className="col-2">
            <i className="fa fa-trash" aria-hidden="true" onClick={() => DeleteCardItem(id)}></i>
        </div>
    </div>
    );
};

export default CardTableItem;