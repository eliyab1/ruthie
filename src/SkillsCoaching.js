import { Link } from "react-router-dom";
import { useEffect } from "react"

export default function SkillsCoaching() {
    useEffect(()=>{document.title="Skills Coaching | Mental Fitness Therapy"},[])
    return <>
        <h2 style={{ "textAlign":"center","marginTop":"3%"}}><u>Skills Coaching</u></h2><br /><br />
        <div className="page-content"><h2> I have designed curricula for therapy groups and individual clients, 
            both for general therapy and maternal mental health, for use in outpatient practice, IOP, PHP, and inpatient.  
            Feel free to inquire about designing curriculum and worksheets to fit your specific needs.</h2>
        <Link to="/contact"><h3>Contact Me</h3></Link>
        </div>
    </>
}