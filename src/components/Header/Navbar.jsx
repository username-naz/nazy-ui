import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiArrowBack } from 'react-icons/bi';

export const Navbar = ({theme, logo, dropdowns, items, title})=>{


    const [open, setOpen] = useState(false);

    return (
        <div className={ `nav ${open?'open':'closed'} nav--${theme}`}>
            <div className='backdrop' style={{display:!open?"none":"block"}} onClick={()=>setOpen(false)}></div>
            <GiHamburgerMenu className='ham' onClick={()=>setOpen(true)} style={{display:(!open)?'block':'none'}}/>
            <BiArrowBack className='ham' onClick={()=>setOpen(false)} style={{display:open?'block':'none'}}/>
            <img src={logo}></img>
            <h4>{title}</h4>
            <div className='nav-list'>
            
                
            {             
                items.map((item)=>(
                <Link to={item.link}>{item.name}</Link>
                ))
            }

            {
                dropdowns.map((item)=>(
                <Link className='droppable' to="#">{item.name + ' ▼'}
                    <div className='drop-down'>

                    {
                        item.items.map(i=> <Link to={i.link}>{i.name}</Link>)
                    }
                    </div>
                </Link>
                ))

            }
            </div>
        </div>
    );
}


Navbar.protoTypes = {
    title:PropTypes.string,
    theme:PropTypes.string,
    logo:PropTypes.string,
    items:PropTypes.array,
    dropdowns:PropTypes.array,
}

Navbar.defaultProps = {
    theme:'light',
    logo:'',
    items:[],
    dropdowns:[],
}

export default Navbar;
