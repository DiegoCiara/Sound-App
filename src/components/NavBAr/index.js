import React from "react"
import image from "./logo.png"
import linkedin from "./social/linkedin.png"
import github from "./social/github.png"

import "./styles.css"


export function NavBar() {
    return(
        <div className="nav-content">
            <img src={image} className="social-icon"/>
            <div >
                <div className="social-icons">
                    <div >
                        <img src={linkedin} className="social-icon" />
                        <a href="https://www.linkedin.com/in/diego-antonio-055602249/">LinkedIn</a>
                    </div>
                    <div>
                        <img src={github} className="social-icon" />
                        <a href="https://github.com/DiegoCiara">GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    )
}