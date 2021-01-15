import React from 'react'
import {darkWave, general, packageBox, payment, cart,Headset, config} from '../../../imgs'
import './scss/CostumerCare.scss'

export default function CostumerCare() {
    return (
        <div className="costumer-care">
            
            <img src={darkWave} alt="" className="top-facingdown"/>


            <div className="con-90-res">
            <h1 className="ccare-title">
                COSTUMER CARE
            </h1>
                <div className="ccare-grid">


                    <div className="ccbox">

                        <div className="ccbox-img">
                            <div className="ccbox-img-box">
                            <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 489 489"><title>worldwide-svgrepo-com</title><path d="M244.5,0A244.5,244.5,0,1,0,489,244.5,244.29,244.29,0,0,0,244.5,0ZM447.4,223.7H379.3c-2.9-64.7-19-121.4-43.7-161.6C396.5,92.7,440.2,152.9,447.4,223.7ZM223.7,46.4V223.7H150.4C154.9,133,188.3,65.9,223.7,46.4Zm0,218.9V442.7c-35.5-19.3-68.9-85.9-73.4-177.4Zm41.6,177.3V265.3h73.3C334.2,356.1,300.8,423.1,265.3,442.6Zm0-218.9V46.4c35.5,19.3,68.9,85.9,73.4,177.4H265.3ZM153.5,62.1c-24.7,40.1-40.9,96.9-43.7,161.6H41.7C48.9,152.9,92.5,92.7,153.5,62.1ZM41.7,265.3h68.1c2.9,64.7,19,121.4,43.7,161.6C92.5,396.3,48.9,336.1,41.7,265.3ZM335.6,426.9c24.7-40.1,40.9-96.9,43.7-161.6h68.1C440.2,336.1,396.5,396.3,335.6,426.9Z" transform="translate(0 0)"/></svg>
                            </div>
                        </div>
                        <div className="ccbox-title">
                            <h3>General issues</h3>
                        </div>

                    </div>
                    <div className="ccbox">

                        <div className="ccbox-img">
                            <div className="ccbox-img-box">
                            <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 491.29 440.77"><title>package-svgrepo-com</title><path d="M481.82,113.21,248.66,25.9a10.28,10.28,0,0,0-7.16,0L6.71,113.82c-4.12,1.2-9.11,7.71-5.42,14.37V374.71a10.21,10.21,0,0,0,6.88,9.65l231,79.74a12.14,12.14,0,0,0,10.41,1.29l234.79-81a10.21,10.21,0,0,0,6.88-9.65V123.38C491.37,118.49,485.64,114.56,481.82,113.21Zm-31.06,10.17L245.69,200.17l-61.54-23L379.47,96.68ZM351.38,86.17,146.13,170.7l-5.05,49.1-38.21-15.39V158.84l212.88-86ZM245.08,46.36l42.4,15.88L90.17,141.95,40,123.16ZM21.71,138.56l60.75,22.75v56.88l76.16,30.69L164.47,192l71.61,26.82v222.6l-214.38-74ZM470.87,367.43l-214.37,74v-223l214.38-80.27Z" transform="translate(0 -25.26)"/></svg>
                            </div>
                        </div>
                        <div className="ccbox-title">
                            <h3>Delivery issues</h3>
                        </div>

                    </div>
                    <div className="ccbox">

                        <div className="ccbox-img">
                            <div className="ccbox-img-box">
                            <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60.01 50"><title>cart-svgrepo-com</title><path d="M11.68,13l-.83-5h-3a4,4,0,1,0,0,2H9.15l.5,3h0l5.17,26A5.14,5.14,0,0,0,10,43.5,5,5,0,0,0,15,49h2a6,6,0,0,0,12,0H40a6,6,0,0,0,12,0h4a1,1,0,0,0,0-2H51.65a6,6,0,0,0-11.3,0H28.65a6,6,0,0,0-11.3,0H15a3,3,0,0,1-2.22-1A3,3,0,0,1,12,43.7,3.13,3.13,0,0,1,15.19,41H55a5,5,0,0,0,5-5V13ZM4,11A2,2,0,1,1,6,9,2,2,0,0,1,4,11ZM46,45a4,4,0,1,1-4,4A4,4,0,0,1,46,45ZM23,45a4,4,0,1,1-4,4A4,4,0,0,1,23,45ZM58,30.22,49.23,39H40.75L58,21.73ZM58,18.9,37.92,39H29.43l24-24H58ZM18.11,39l24-24h8.49l-24,24ZM13.28,21.2l6.2-6.2H28L14.69,28.28ZM16.66,15l-3.84,3.84L12.05,15Zm-1.5,15.64L30.8,15h8.49L16.61,37.67s0,0,0,.07ZM55,39h-3l6-6v3A3,3,0,0,1,55,39Z" transform="translate(0 -5.01)"/></svg>
                            </div>
                        </div>
                        <div className="ccbox-title">
                            <h3>Order issues</h3>
                        </div>

                    </div>
                    <div className="ccbox">

                        <div className="ccbox-img">
                            <div className="ccbox-img-box">
                            <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 515.88 574.58"><title>headset-svgrepo-com</title><path d="M44.58,458.14H68.93c-4.62,92.17,91.93,110.4,167,107.49a17.82,17.82,0,0,0,15.42,8.95H327.8a17.91,17.91,0,0,0,17.91-17.91V540.9A17.91,17.91,0,0,0,327.8,523H251.38a17.9,17.9,0,0,0-17.56,14.48C173,540.62,94.44,531.53,97.56,458.15h33a15.22,15.22,0,0,0,15.22-15.23V264.57a15.23,15.23,0,0,0-15.22-15.23H84.39c6-109.76,97-200.39,204-200.39s198,90.62,204,200.39H444.06a15.22,15.22,0,0,0-15.22,15.23V442.92a15.22,15.22,0,0,0,15.22,15.23H530a15.23,15.23,0,0,0,15.23-15.23V264.57a15.09,15.09,0,0,0-3.7-9.85C538.2,116,423.68,0,288.39,0,153.8,0,39.76,114.83,35.31,252.58a15.12,15.12,0,0,0-6,12V442.92A15.23,15.23,0,0,0,44.58,458.14Z" transform="translate(-29.35 0)"/></svg>
                            </div>
                        </div>
                        <div className="ccbox-title">
                            <h3>Service</h3>
                        </div>

                    </div>
                    <div className="ccbox">

                        <div className="ccbox-img">
                            <div className="ccbox-img-box">
                            <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 466.29 369.02"><title>payment-method-svgrepo-com</title><path d="M451.29,48.63H52a15,15,0,0,0-15,15V208.42H33.21A33.25,33.25,0,0,0,0,241.63V384.44a33.25,33.25,0,0,0,33.21,33.21h262a33.25,33.25,0,0,0,33.21-33.21V291.89H451.29a15,15,0,0,0,15-15V63.63A15,15,0,0,0,451.29,48.63Zm-15,59.11a46.8,46.8,0,0,1-29.11-29.11h29.11ZM96.06,78.63A46.81,46.81,0,0,1,67,107.74V78.63ZM33.21,238.42h262a3.21,3.21,0,0,1,3.21,3.21v14.13H30V241.63A3.21,3.21,0,0,1,33.21,238.42Zm155.16-68.16A63.26,63.26,0,1,1,301.56,209a33.28,33.28,0,0,0-6.36-.62H270.42a26.69,26.69,0,0,0-11.3-44.58V142.08a11.68,11.68,0,0,1,4.21,9,7.5,7.5,0,0,0,15,0,26.75,26.75,0,0,0-19.21-25.63v-2.48a7.5,7.5,0,0,0-15,0v2.48a26.7,26.7,0,0,0,0,51.26v21.77a11.69,11.69,0,0,1-4.21-9,7.5,7.5,0,0,0-15,0,26.62,26.62,0,0,0,7.91,18.95H201.17A62.58,62.58,0,0,1,188.37,170.26Zm110,120.79H30V275.77H298.41ZM244.12,160a11.69,11.69,0,0,1,0-18v18Zm15,38.42v-18a11.68,11.68,0,0,1,0,18Zm36.08,189.2h-262A3.21,3.21,0,0,1,30,384.44V311.06H298.41v73.39A3.21,3.21,0,0,1,295.2,387.65Zm24.06-168.87a83.22,83.22,0,1,0-141.68-10.36H67V128.51a66.79,66.79,0,0,0,49.87-49.87H386.41a66.8,66.8,0,0,0,49.87,49.87V212a66.8,66.8,0,0,0-49.87,49.87h-58V241.63A33.08,33.08,0,0,0,319.26,218.78Zm87.92,43.11a46.8,46.8,0,0,1,29.11-29.11v29.11Z" transform="translate(0 -48.63)"/></svg>
                            </div>
                        </div>
                        <div className="ccbox-title">
                            <h3>Payment issues</h3>
                        </div>

                    </div>
                    <div className="ccbox">

                        <div className="ccbox-img">
                            <div className="ccbox-img-box">
                            <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 93.5 93.5"><title>canfig</title><path d="M93.5,40.9a4.45,4.45,0,0,0-4.45-4.45H82a36.27,36.27,0,0,0-3-7.33l5-5A4.48,4.48,0,0,0,85.25,21a4.41,4.41,0,0,0-1.3-3.15L75.67,9.55a4.69,4.69,0,0,0-6.29,0l-5,5a36.19,36.19,0,0,0-7.33-3V4.45A4.45,4.45,0,0,0,52.6,0H40.9a4.45,4.45,0,0,0-4.45,4.45v7.07a36.23,36.23,0,0,0-7.33,3l-5-5a4.55,4.55,0,0,0-6.29,0L9.56,17.83a4.45,4.45,0,0,0,0,6.29l5,5a36.35,36.35,0,0,0-3,7.33H4.45A4.45,4.45,0,0,0,0,40.9V52.6A4.45,4.45,0,0,0,4.45,57h7.07a36.26,36.26,0,0,0,3,7.33l-5,5a4.48,4.48,0,0,0-1.3,3.15,4.42,4.42,0,0,0,1.3,3.15l8.27,8.27a4.68,4.68,0,0,0,6.29,0l5-5a36.2,36.2,0,0,0,7.33,3v7.07A4.45,4.45,0,0,0,40.9,93.5H52.6A4.45,4.45,0,0,0,57,89.05V82a36.08,36.08,0,0,0,7.33-3l5,5a4.55,4.55,0,0,0,6.29,0l8.28-8.27a4.45,4.45,0,0,0,0-6.29l-5-5A36.26,36.26,0,0,0,82,57h7.07A4.45,4.45,0,0,0,93.5,52.6V40.9ZM62.95,46.75a16.2,16.2,0,1,1-16.2-16.2A16.21,16.21,0,0,1,62.95,46.75Z" transform="translate(0 0)"/></svg>
                            </div>
                        </div>
                        <div className="ccbox-title">
                            <h3>Technical issues issues</h3>
                        </div>

                    </div>


                </div>
            </div>
            
        </div>
    )
}