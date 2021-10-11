import { useEffect } from "react"
import { NavLink } from "react-router-dom"
export default function Services() {
    useEffect(()=>{document.title="Services | Mental Fitness Therapy"},[])
    return <div className="servicesnav">
        <div activeClassName="active" style={{"margin": "50px 200px 30px 199px"}}>
    <NavLink to="/services/individual"><button>Individual Therapy</button></NavLink>
    <NavLink to="/services/maternalhealth"><button>Maternal Mental Health</button></NavLink>
    <NavLink to="/services/curriculumdev"><button>Curriculum Development</button></NavLink>
    <NavLink to="/services/grouptherapy"><button>Group Therapy</button></NavLink>
</div></div>
}