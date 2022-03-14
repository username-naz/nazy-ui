import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

export const Button = ({color, size, onClick, label}) =>{

    return(
    <button onClick={onClick} className={'naz-button ' + 'naz-button' + '--' + size} style={{background:color}}>{label}</button>
    );
}


Button.protoTypes = {
    label:PropTypes.string,
    color:PropTypes.string,
    size:PropTypes.oneOf(['small', 'medium', 'large']),
    onClick:PropTypes.func
}

Button.defaultProps = {
    label:'Click',
    color:'#2da9f1',
    size:'medium',
    onClick:undefined
}
export default Button;