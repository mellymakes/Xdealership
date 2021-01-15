import React from 'react'
import './scss/Header.scss'
import { redFerrariSide, redCircles } from '../../../imgs'

export default function Header() {
    return (
        <div className="header">
            <div className="con-90-res">
                <img src={redCircles} alt="" srcset="" className="redcirc"/>
                <div className="header-in">
                    <div className="header-texts">
                        <h1>XDEALERSHIP</h1>
                        <h3>PARTNERED WITH</h3>
                        <h1 className="f">FERRARI</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <button>LEARN MORE</button>
                    </div>
                    <div className="header-img">
                        <img src={redFerrariSide} alt="" srcset=""/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
