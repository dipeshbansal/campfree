import React from 'react';
import Button from '@material-ui/core/Button';

const DigitButton = (props) => {
    return (<Button  className="btn1" style={{backgroundColor:"#C0C0C0" }} onClick={props.doClick}>{props.value}</Button>);
 };

export default DigitButton;