import React from 'react'
import {LightLogo} from'../../../imgs'
import './scss/Header.scss'

export default function Header() {
    return (
        <div className="about-header">
            <div className="con-90-res">
                <h1>WHAT DO YOU WANT<br/> TO KNOW MORE ABOUT</h1>
                <img src={LightLogo} alt="" srcset=""/>
           </div>
        </div>
    )
}
