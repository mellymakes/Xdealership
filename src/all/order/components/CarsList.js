import React from 'react'
import './scss/carslist.scss'
import {darkWave} from '../../../imgs'
import oRDERdATA from './orderData'
import { useState } from 'react/cjs/react.development'




function BigBox({TITLE, YEAR, IMG, PRICE, COUNTRY, WEIGHT, HEIGHT}){



    return (
        <div className="order-bigbox">
            <div className="obb-inside">
                <h1 className="obb-title">
                    <h1>{TITLE}</h1>
                </h1>
                <div className="obb-grid">
                    <div className="obb-left">
                        <p>Made in year: {YEAR}</p>
                        <p>Made in country: {COUNTRY}</p>
                        <p>Weight: {WEIGHT}</p>
                        <p>Height: {HEIGHT}</p>
                    </div>
                    <div className="obb-right">
                        <img src={IMG} alt="" srcset=""/>
                    </div>
                    <div className="obb-price">
                        <h3>{PRICE}$</h3>
                    </div>
                    <div className="obb-btn">
                        <button>BUY NOW</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


function SmallBox({TITLE, YEAR, IMG, PRICE}) {

    return (
   


        <div className="order-smallbox">
            <div className="osb-inside">


                <div className="osb-title"> <h3>{TITLE}</h3> </div>
                
                <div className="osb-year"> <p>From {YEAR}</p> </div>

                <div className="osb-img">
                    <img src={IMG} alt="" srcset=""/>
                </div>

                <div className="osb-price"><h3>{PRICE}</h3></div>

                <div className="osb-btn">
                    <button>
                        MORE INFO
                    </button>
                </div>


            </div>
       </div>


    
    )
}



export default function CarsList() {

    const [ORDERdATA] = useState(oRDERdATA)

    const [width, setWidth] = useState(window.innerWidth)
    

    const smallBoxes = ORDERdATA.map(data => <SmallBox TITLE={data.carName} PRICE={data.price} YEAR={data.madeInYear} IMG={data.img}/>)
    
    const bigBoxes = ORDERdATA.map(data => <BigBox TITLE={data.carName} PRICE={data.price} YEAR={data.madeInYear} IMG={data.img} COUNTRY={data.madeInCountry} WEIGHT={`${data.weight.num} ${data.weight.unit}`} HEIGHT={`${data.height.num} ${data.height.unit}`}/>)


    window.addEventListener('resize', () => setWidth(window.innerWidth))

    return (
        <div className="order-carslist">
            <img src={darkWave} className="top-facingdown" alt="" srcset=""/>

            <div className="con-90-res">
                <h1 className="carslist-title">
                     CARS LIST
                </h1>
            </div>
            
            <div className="con-90-res">
            <div className="carslist-grid">


                    {width < 1200 ? smallBoxes: bigBoxes}



            </div>
            </div>
        </div>
    )
}
