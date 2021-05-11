import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {LightLogo, burgerMenu} from '../../imgs'
import './nav.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Nav() {

     const [dropDownState, setDropDownState] = useState(false)

     function onC(){
          setDropDownState(!dropDownState)
     }

     function dropDownClass(){
          if(!dropDownState){
               return 'nav-dropdown'
          }else{
               return 'nav-dropdown active-dropdown'
          }
     }

     function dropDownClassNav(){
          if(!dropDownState){
               return 'nav'
          }else{
               return 'nav active-dropdown-nav'
          }
     }

     

     return (
          <>
          <div className={dropDownClassNav()}>
               <div className="con-90-res">
                    <div className="nav-in">
                         <div className="nav-logo"><img src={LightLogo} alt="" srcset=""/></div>
                         <div className="nav-list">
                              <ul>
                                   <NavLink to="/"className="cool-nav-animation" exact activeClassName="cool-nav-animation-active">
                                        <li><p>Home</p></li>
                                   </NavLink>
                                   <NavLink to="/order"className="cool-nav-animation" activeClassName="cool-nav-animation-active">
                                        <li><p>Order</p></li>
                                   </NavLink>
                                   <NavLink to="/about"className="cool-nav-animation" activeClassName="cool-nav-animation-active">
                                        <li><p>About</p></li>
                                   </NavLink>
                                   <NavLink to="/FAQ"className="cool-nav-animation" activeClassName="cool-nav-animation-active">
                                        <li><p>FAQ</p></li>
                                   </NavLink>
                              </ul>
                         </div>
                         <div className="nav-soscm">
                              <ul>
                                   <li><div className="icon st"></div><FontAwesomeIcon icon={['fab', 'facebook-f']}/></li>
                                   <li><div className="icon"></div><FontAwesomeIcon icon={['fab', 'instagram']}/></li>
                                   <li><div className="icon"></div><FontAwesomeIcon icon={['fab', 'twitter']}/></li>
                              </ul>
                              <img onClick={onC} src={burgerMenu} alt="" srcset=""/>
                         </div>
                    </div>
               </div>
          </div>
          <div className={dropDownClass()}>
          <ul className="navlinks">
                                   <NavLink to="/"className="cool-nav-animation" exact activeClassName="active-dropdown-link">
                                        <li><p>Home</p></li>
                                   </NavLink>
                                   <NavLink to="/order"className="cool-nav-animation" activeClassName="active-dropdown-link">
                                        <li><p>Order</p></li>
                                   </NavLink>
                                   <NavLink to="/about"className="cool-nav-animation" activeClassName="active-dropdown-link">
                                        <li><p>About</p></li>
                                   </NavLink>
                                   <NavLink to="/FAQ"className="cool-nav-animation" activeClassName="active-dropdown-link">
                                        <li><p>FA</p></li>
                                   </NavLink>
           </ul>
                         <div className="sdropdown">
                         <ul>
                                   <li><FontAwesomeIcon icon={['fab', 'facebook-f']}/></li>
                                   <li><FontAwesomeIcon icon={['fab', 'instagram']}/></li>
                                   <li><FontAwesomeIcon icon={['fab', 'twitter']}/></li>
                              </ul>
                         </div>
          </div>
          </>
     )
}
