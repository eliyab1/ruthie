import { useEffect } from "react"
import { NavLink } from "react-router-dom"
import elephants from "./elephants.jfif"
import patient from "./patient.jfif"
import pianephant from "./pianephant.jfif"
export default function Services() {
    useEffect(()=>{document.title="Services | Mental Fitness Therapy"},[])
    return <>
    <div className="servicesnav">
            <NavLink to="/services/individual"><button>Individual Therapy</button></NavLink>
            <NavLink to="/services/postpartumparents"><button>Postpartum Parents</button></NavLink>
            <NavLink to="/services/curriculumdev"><button>Curriculum Development</button></NavLink>
            <NavLink to="/services/grouptherapy"><button>Group Therapy</button></NavLink>
    </div>
    <div className="servicespics">
    <img src={patient} alt="patient life" height="240" style={{"borderRadius":"10%"}} />
    <img src={elephants} alt="elephants" height="150" style={{"borderRadius":"75%"}} />
    <img src={pianephant} alt="pianephant" height="240" style={{"borderRadius":"10%"}} />
    </div>
</>}