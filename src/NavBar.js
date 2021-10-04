import React, {useState} from "react"
import clsx from "clsx"
export default function NavBar() {
    const [home, setHome] = useState(true)
    const [services, setServices] = useState(false)
    const [contact, setContact] = useState(false)
    const [aboutMe, setAboutMe] = useState(false)
    function tabs() {

        function activate(e) {
            const states = {"setHome":setHome, "setServices": setServices, "setContact": setContact, "setAboutMe":setAboutMe}
            Object.keys(states).map(state => {if (state===e) {return states.state(true)} else {return states.{state}(false)}})
        }

    return<div className="topnav">
        <button className={clsx({"active":home})} value="setHome" onClick={(e) => activate(e.target.value)}>Home</button>
        <button className={clsx({"active":services})} value="setServices" onClick={(e) => {activate(e.target.value)}}>Services</button>
        <button className={clsx({"active":contact})} value="setContact" onClick={(e) => {activate(e.target.value)}}>Contact</button>
        <button className={clsx({"active":aboutMe})} value="setAboutMe" onClick={(e) => {activate(e.target.value)}}>About Me</button>
    </div>}
    return {tabs, home, services, contact, aboutMe}
}