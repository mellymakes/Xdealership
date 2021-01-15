import React from 'react'
import './scss/Quality.scss'
import {darkWave, fasterCars, robustEngine, stylishDesign} from '../../../imgs'
 
export default function Quality() {
    return (
        <div className="quality">
            <img src={darkWave} alt="" className="top-facingdown"/>

            <div className="con-90-res">
            
            <h1 className="quality-title">OUR CAR QUALITIES</h1>

            <p className="quality-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            </p>

            </div>

            <div className="con-90-res">
                <div className="quality-grid">


                    <div className="qbox">
                        <div className="qbox-img">
                            <img src={fasterCars} alt="" srcset=""/>
                        </div>
                        <div className="qbox-title">
                            <h3>FASTER CARS</h3>
                        </div>
                        <div className="qbox-desc">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                        </div>
                    </div>

                    <div className="qbox">
                        <div className="qbox-img">
                            <img src={robustEngine} alt="" srcset=""/>
                        </div>
                        <div className="qbox-title">
                            <h3>ROBUST ENGINE</h3>
                        </div>
                        <div className="qbox-desc">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                        </div>
                    </div>

                    <div className="qbox">
                        <div className="qbox-img">
                            <img src={stylishDesign} alt="" srcset=""/>
                        </div>
                        <div className="qbox-title">
                            <h3>STYLISH DESIGN</h3>
                        </div>
                        <div className="qbox-desc">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
