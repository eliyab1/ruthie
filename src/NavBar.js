import { NavLink } from "react-router-dom"
export default function NavBar() {
    return <div className="topnav">
        <NavLink exact to="/" ><button>Home</button></NavLink>
        <div className="dropdown">
            <NavLink to="/services" ><button className="dropdown">Services</button></NavLink>
                <div className="dropdown-content">
                    <NavLink to="/services/individual"><span>Individual Therapy</span></NavLink>
                    <NavLink to="/services/postpartumparents"><span>Postpartum Parents</span></NavLink>
                    <NavLink to="/services/curriculumdev"><span>Curriculum Development</span></NavLink>
                    <NavLink to="/services/grouptherapy"><span>Group Therapy</span></NavLink>
                </div>
        </div>
        <NavLink to="/contact" ><button>Contact</button></NavLink>
        <NavLink to="/faq" ><button  >FAQ</button></NavLink>
        <NavLink to="/resources" ><button>Resources</button></NavLink>
        <NavLink to="/aboutme" ><button>About Me</button></NavLink>
    </div>
}