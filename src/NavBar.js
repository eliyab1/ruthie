import React, {useState} from "react"
import clsx from "clsx"
import { Link } from "react-router-dom"
export default function NavBar() {
    const [home, setHome] = useState(true)
    const [services, setServices] = useState(false)
    const [aboutMe, setAboutMe] = useState(false)
    const [faqs, setFaqs] = useState(false)
    const [resources, setResources] = useState(false)
    const [contact, setContact] = useState(false)
    function Tabs() {

        // function activate(e) {
        //     const states = ["setHome", "setServices", "setAboutMe", "setFaqs", "setResources", "setContact"]
        //     states.map(state => {if (state===e) {return eval(state)(true)} else {return eval(state)(false)}})
//         // }
//         onClick={(e) => {activate(e.target.value)}}
// onClick={(e) => {activate(e.target.value)}}
// onClick={(e) => {activate(e.target.value)}}
// onClick={(e) => {activate(e.target.value)}}
// onClick={(e) => {activate(e.target.value)}}
// onClick={(e) => activate(e.target.value)}

    return<div className="topnav">
        <Link to="/"><button className={clsx({"active":home})} value="setHome" >Home</button></Link>
        <div className={clsx({"active":services, "dropdown":true})}>
        <Link to="/services"><button className={clsx({"active":services, "dropdown":true})} value="setServices" >Services</button></Link>
        <div className={clsx({"active":services, "dropdown-content":true})}>
            <Link to="/individual"><span>Individual Therapy</span></Link>
            <Link to="/maternalhealth"><span>Maternal Mental Health</span></Link>
            <Link to="/curriculumdev"><span>Curriculum Development</span></Link>
            <Link to="/grouptherapy"><span>Group Therapy</span></Link>
            <Link to="/plantmedicine"><span>Plant Medicine/ Altered States of Consciousness Integration</span></Link>
        </div>
        </div>
        <Link to="/contact"><button className={clsx({"active":contact})} value="setContact" >Contact</button></Link>
        <Link to="/faqs"><button className={clsx({"active":faqs})} value="setFaqs" >FAQ's</button></Link>
        <Link to="/resources"><button className={clsx({"active":resources})} value="setResources" >Resources</button></Link>
        <Link to="/aboutme"><button className={clsx({"active":aboutMe})} value="setAboutMe" >About Me</button></Link>
    </div>}
    return {Tabs, home, services, aboutMe, faqs, resources, contact}
}