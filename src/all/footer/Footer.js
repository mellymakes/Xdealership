import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {LightLogo} from '../../imgs'
import {Link} from 'react-router-dom'
import './scss/footer.scss'

export default function Footer() {
     return (
          <div className="footer">
               <div className="con-90-res">
                    <div className="footer-logo">
                         <img src={LightLogo} alt="" srcset=""/>
                    </div>
                    <div className="footer-sosms">
                         <div className="footer-sosm">
                              <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                         </div>
                         <div className="footer-sosm">
                              <FontAwesomeIcon icon={['fab','instagram']}/>
                         </div>
                         <div className="footer-sosm">
                              <FontAwesomeIcon icon={['fab','twitter']}/>
                         </div>
                    </div>
                    <ul className="footer-nav">
                         <li><Link to="/">Home</Link></li>
                         <li><Link to="/order">Order</Link></li>
                         <li><Link to="/about">About</Link></li>
                         <li><Link to="/FAQ">FAQ</Link></li>
                    </ul>
                    <div className="bot-frag">
                         <p>all Copyright reserved &copy; Web page Melly</p>
                    </div>
               </div>
          </div>
     )
}
