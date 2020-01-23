import React from 'react';
import Button from '@material-ui/core/Button';


const OperatorButton = (props) => {
    return (<Button className="btn" style={{backgroundColor:"#C0C0C0"}} onClick={props.doClick}>{props.value}</Button>);
 };

export default OperatorButton;