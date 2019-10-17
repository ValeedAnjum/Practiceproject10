import React from 'react';
// import { Form, Label } from 'semantic-ui-react';

const Textinput = (props) => {
    const {input,type,placeholder,meta:{touched,error}} = props;
    return (
        <React.Fragment>
        <input {...input} placeholder={(touched && error) ? error:placeholder} 
        type={type} 
        autoComplete="on"
        required="Blala"
        className={(touched && error) ? 'animated ErrorInput shake':null}/>
        {/* {
            touched && error && <h1>{error}</h1>
        } */}
        </React.Fragment>
    );
};

export default Textinput;