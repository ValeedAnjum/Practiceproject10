import React from 'react';

const CardTableHeading = () => {
    return (
        <div className="row cardHeadingTable">
                <div className="col-4">
                    Product
                </div>
                <div className="col-2">
                    Price
                </div>
                <div className="col-2">
                    Quantity
                </div>
                <div className="col-2">
                    Total
                </div>
                <div className="col-2">
                    Remove
                </div>
        </div>
    );
};

export default CardTableHeading;