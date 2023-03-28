import React from "react"
import image from "./logo.png"
import linkedin from "./social/linkedin.png"
import github from "./social/github.png"

import "./styles.css"


export function NavBar() {
    return(
        <div className="nav-content">
            <div className="content-brand">
                <img src={image} className="brand"/>
            </div>
            <div >
                <div className="social-icons">
                    <div className="link">
                        <img src={linkedin} className="social-icon" />
                        <a href="https://www.linkedin.com/in/diego-antonio-055602249/">LinkedIn</a>
                    </div>
                    <div className="link">
                        <img src={github} className="social-icon" />
                        <a href="https://github.com/DiegoCiara">GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    )
}