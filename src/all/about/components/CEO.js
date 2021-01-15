import React from 'react'
import {darkWave, CEO as ceoP, XdealerFacility, ferrariFacility} from '../../../imgs'
import './scss/CEO.scss'

export default function CEO() {
    return (
        <div className="about-ceo">
                <img className="top-facingdown" src={darkWave} alt="" srcset=""/>
            <div className="con-90-res">
                <h1 className="about-ceo-title">
                    WORD FROM OUR CEO
                </h1>
                <div className="abox">
                    <div className="abox-texts">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                    <div className="abox-img">
                        <div className="abox-img-box">
                            <img src={ceoP} alt="" srcset=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
