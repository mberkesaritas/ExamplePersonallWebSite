import React from 'react'
import "./header.css"
import CTA from "./CTA"
import ME from "../../assets/me.png"
import HedaderSocial from './HedaderSocial'

const Header = () => {
    return (
       <header>
           <div className="container header__container">
               <h5>Hello I'm</h5>
               <h1>Berke Sarıtaş</h1>
               <h5 className="text-ligth">Developer</h5>
               <CTA/> 
               <HedaderSocial/>

            <div className="me">
                <img src={ME} alt="me" />
            </div>

            <a href="#contact" className="scroll__down">Scroll Down</a>

           </div>
       </header>
    )
}

export default Header
