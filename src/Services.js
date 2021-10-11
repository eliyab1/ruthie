import { useEffect } from "react"
import { NavLink } from "react-router-dom"
import elephants from "./elephants.jfif"
import patient from "./patient.jfif"
import pianephant from "./pianephant.jfif"
export default function Services() {
    useEffect(()=>{document.title="Services | Mental Fitness Therapy"},[])
    return <>
    <div className="servicesnav">
        <div activeClassName="active" style={{"margin": "70px 200px 30px 199px"}}>
            <NavLink to="/services/individual"><button>Individual Therapy</button></NavLink>
            <NavLink to="/services/maternalhealth"><button>Maternal Mental Health</button></NavLink>
            <NavLink to="/services/curriculumdev"><button>Curriculum Development</button></NavLink>
            <NavLink to="/services/grouptherapy"><button>Group Therapy</button></NavLink>
        </div>
    </div>
    <img src={elephants} alt="elephants" height="150" style={{"border-radius":"75%","margin":"120px 500px 10px 700px"}} />
    <img src={patient} alt="patient life" height="240" style={{"border-radius":"10%","margin":"-250px 200px 0px 1100px"}} />
    <img src={pianephant} alt="elephant with piano trunk" height="240" style={{"border-radius":"10%","margin":"-300px 900px 10px 260px"}} />
</>}