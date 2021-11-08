import { useEffect } from "react"
import { NavLink } from "react-router-dom"
export default function Services() {
    useEffect(()=>{document.title="Services | Mental Fitness Therapy"},[])
    return <>
    <div className="servicesnav">
            <NavLink to="/services/individual"><button>Individual Therapy</button></NavLink>
            <NavLink to="/services/postpartumparents"><button>Postpartum Parents</button></NavLink>
            <NavLink to="/services/skillscoaching"><button>Skills Coaching</button></NavLink>
            <NavLink to="/services/grouptherapy"><button>Group Therapy</button></NavLink>
    </div>
</>}