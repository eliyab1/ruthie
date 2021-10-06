import React, {useState} from "react"
import clsx from "clsx"
export default function NavBar() {
    const [home, setHome] = useState(true)
    const [services, setServices] = useState(false)
    const [aboutMe, setAboutMe] = useState(false)
    const [faqs, setFaqs] = useState(false)
    const [resources, setResources] = useState(false)
    const [contact, setContact] = useState(false)
    function Tabs() {

        function activate(e) {
            const states = ["setHome", "setServices", "setAboutMe", "setFaqs", "setResources", "setContact"]
            states.map(state => {if (state===e) {return eval(state)(true)} else {return eval(state)(false)}})
        }

    return<div className="topnav">
        <button className={clsx({"active":home})} value="setHome" onClick={(e) => activate(e.target.value)}>Home</button>
        <div className={clsx({"active":services, "dropdown":true})}>
        <button className={clsx({"active":services, "dropdown":true})} value="setServices" onClick={(e) => {activate(e.target.value)}}>Services</button>
        <div className={clsx({"active":services, "dropdown-content":true})}>
            <span>Individual Therapy</span>
            <span>Maternal Mental Health</span>
            <span>Curriculum Development</span>
            <span>Group Therapy</span>
            <span>Plant Medicine/ Altered States of Consciousness Integration</span>
        </div>
        </div>
        <button className={clsx({"active":contact})} value="setContact" onClick={(e) => {activate(e.target.value)}}>Contact</button>
        <button className={clsx({"active":faqs})} value="setFaqs" onClick={(e) => {activate(e.target.value)}}>FAQ's</button>
        <button className={clsx({"active":resources})} value="setResources" onClick={(e) => {activate(e.target.value)}}>Resources</button>
        <button className={clsx({"active":aboutMe})} value="setAboutMe" onClick={(e) => {activate(e.target.value)}}>About Me</button>
    </div>}
    return {Tabs, home, services, aboutMe, faqs, resources, contact}
}