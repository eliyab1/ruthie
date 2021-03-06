import { NavLink } from "react-router-dom"
export default function NavBar() {
    return <div className="topnav">
        <NavLink   exact to="/" ><button activeStyle={{ "color":"dodgerblue" }}>Home</button></NavLink>
        <div className="dropdown">
            <button className="dropdown">Services</button>
                <div className="dropdown-content">
                    <NavLink activeStyle={{ "color":"dodgerblue" }} to="/services/individual"><span>Individual Therapy</span></NavLink>
                    <NavLink activeStyle={{ "color":"dodgerblue" }} to="/services/postpartumparents"><span>Postpartum Parents</span></NavLink>
                    <NavLink activeStyle={{ "color":"dodgerblue" }} to="/services/skillscoaching"><span>Skills Coaching</span></NavLink>
                    <NavLink activeStyle={{ "color":"dodgerblue" }} to="/services/grouptherapy"><span>Group Therapy</span></NavLink>
                </div>
        </div>
        <NavLink  activeStyle={{ "color":"dodgerblue" }} to="/aboutme" ><button>About Me</button></NavLink>
        <NavLink  activeStyle={{ "color":"dodgerblue" }} to="/faq" ><button>FAQ</button></NavLink>
        <NavLink  activeStyle={{ "color":"dodgerblue" }} to="/resources" ><button>Resources</button></NavLink>
        <NavLink  activeStyle={{ "color":"dodgerblue" }} to="/contact" ><button>Contact</button></NavLink>
    </div>
}