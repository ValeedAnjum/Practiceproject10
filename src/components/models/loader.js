import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const loader = () => {
    return (
        <div className="loaderContainer">
            <div className="closeContainer">
                <CircularProgress disableShrink/>
            </div>
        </div>
    );
};

export default loader;