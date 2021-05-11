import React, {useState} from 'react'
import SwiperCore, {Navigation, Pagination} from 'swiper'
import {redLines} from '../../../imgs'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper.scss'
import './scss/header.scss'
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import oRDERdATAs from './orderData'

SwiperCore.use([Navigation, Pagination])

export default function Header() {

    

    const [oRDERdATA] = useState(oRDERdATAs) 

    const [activeIndex, setActiveIndex] = useState(0)

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    window.addEventListener('resize', () => setWindowWidth(window.innerWidth))

    function slideChange(data){
        
        const {activeIndex} = data

        const aactiveindex = (data.activeIndex - 1) % (data.slides.length - 2)

        setActiveIndex(aactiveindex === -1 ? 3 : aactiveindex)
    
    }

    const {carName: displayedCarName, price:displayedCarPrice} = oRDERdATA[activeIndex]

    return (
        <div className="order-header">
            <div className="con-res-90"><h1 className="order-header-title">CARS SLIDER</h1></div>
            <img src={redLines} className="orderRedLines" alt="" srcset=""/>
            
            <Swiper
             className="order-header-cars-slider"
             onSlideChange={(data) => slideChange(data)}
             loop
             navigation={windowWidth > 1200}
             
            >

                {
                    oRDERdATA.map(data => <SwiperSlide className="ohc-slide"><img src={data.img} alt="" srcset=""/></SwiperSlide>)
                }
                
            </Swiper>

            <div className="con-res-90">
                <div className="order-header-info">
                    <h3 className="ohi-name">{displayedCarName}</h3>
                    <h3 className="ohi-price">{displayedCarPrice}</h3>
                    <button className="ohi-btn">VIEW DETAILS</button>
                </div>
            </div>
            

        </div>
    )
}
