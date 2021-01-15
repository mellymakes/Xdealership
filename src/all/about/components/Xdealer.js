import React from 'react'
import { lightWave, XdealerFacility } from '../../../imgs'
import './scss/Xdealer.scss'

export default function Xdealer() {
    return (
        <div className="xdealer">
            <img className="top-facingdown" src={lightWave} alt="" srcset=""/>
            <div className="con-90-res">
                <h1 className="about-ceo-title xdealerT">
                    WHAT IS XDEALERSHIP
                </h1>
                <div className="abox xdealer-b">
                    <div className="abox-texts xdealer-t">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                    <div className="abox-img">
                        <div className="abox-img-box">
                            <img src={XdealerFacility} alt="" srcset=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
