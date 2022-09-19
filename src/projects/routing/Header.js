import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component{
    render(){
        return(
           <div className='Header'>
                <ul>
                    <li><Link to={"/"}> HOME</Link></li>
                    <li><Link to={"simplilearn"}>Simplilearn</Link></li>
                </ul>
           </div>
        )
    }
}