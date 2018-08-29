import React from 'react';
import './Button.css';

const Button = (props) => (
    <button  onClick={props.onClick}>{props.children}</button>
);

export default Button;