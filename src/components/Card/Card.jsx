import React from 'react';
import './card.css';
import Button from '../Button/Button'
import PropTypes from 'prop-types'

const Card = ({img, title, description, button, color})=>{
    return(
        <div className='naz-card' style={{background:color}}>
            <img src={img}></img>
            <h4>{title}</h4>
            <p>{description}</p>
            {button && <Button {...button}/>}
        </div>
        );
}

Card.protoTypes = {
    img:PropTypes.string,
    title:PropTypes.string,
    description:PropTypes.string,
    color:PropTypes.string,
}

Card.defaultProps = {
    color:'#eee',
    title:'Title',
    description:'description',
}

export default Card;