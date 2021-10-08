import { NavLink } from "react-router-dom"
export default function NavBar() {
    return <div className="topnav">
        <NavLink exact to="/" activeClassName="active"><button  value="setHome" >Home</button></NavLink>
        <div activeClassName="active" className="dropdown">
            <NavLink to="/services" activeClassName="active"><button className="dropdown"  value="setServices" >Services</button></NavLink>
                <div activeClassName="active" className="dropdown-content">
                    <NavLink to="/services/individual"><span>Individual Therapy</span></NavLink>
                    <NavLink to="/services/maternalhealth"><span>Maternal Mental Health</span></NavLink>
                    <NavLink to="/services/curriculumdev"><span>Curriculum Development</span></NavLink>
                    <NavLink to="/services/grouptherapy"><span>Group Therapy</span></NavLink>
                    <NavLink to="/services/plantmedicine"><span>Plant Medicine/ Altered States of Consciousness Integration</span></NavLink>
                </div>
        </div>
        <NavLink to="/contact" activeClassName="active"><button  value="setContact" >Contact</button></NavLink>
        <NavLink to="/faqs" activeClassName="active"><button  value="setFaqs" >FAQ's</button></NavLink>
        <NavLink to="/resources" activeClassName="active"><button  value="setResources" >Resources</button></NavLink>
        <NavLink to="/aboutme" activeClassName="active"><button  value="setAboutMe" >About Me</button></NavLink>
    </div>
}