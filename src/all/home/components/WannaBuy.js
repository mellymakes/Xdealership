import React from 'react'
import {lightWave} from '../../../imgs'
import './scss/WannaBuy.scss'

export default function WannaBuy() {
    return (
        <div className="wannabuy">
            <img src={lightWave} className="top-facingdown" alt="" srcset=""/>

            <div className="con-90-res">
                <h1>INTRESTED TO BUY YOURSELF A NEW CAR?</h1>
                <button>ORDER NOW</button>
            </div>
        </div>
    )
}
