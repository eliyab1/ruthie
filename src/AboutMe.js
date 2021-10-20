import { useEffect } from "react"
import ruth from "./ruth.jfif"
import seal from "./sealSmall.png"
export default function AboutMe() {
    useEffect(()=>{document.title="About Me | Mental Fitness Therapy"},[])
    return <><div className="page-content">
    <b>
    <h2>Ruthie Ayzenberg, LMFT, LPCC, PMH-C</h2>
   <img src={ruth} alt="ruthie ayzenberg" height="300" style={{"borderRadius":"75%"}} />
   <br />
   <br />
    <h3>I am a licensed Marriage and Family Therapist and Professional Clinical Counselor,  practicing therapy since 2013. I completed 
        the Counseling Psychology program at Santa Clara University, and over the years have worked with kids, teens, families, and 
        adults with a wide range of concerns across all levels of care from outpatient to hospital.  Working in the MOMS program at El 
        Camino Hospital, getting training from Postpartum Support International, and being a mother of two, has equipped me to specialize 
        in maternal and perinatal mental health, including working with moms and dads facing difficulties during pregnancy and postpartum. 
        I also enjoy working with students, professionals, people with diverse backgrounds, and anyone who is motivated to do the therapy 
        work. I welcome all people, with situations from the most straightforward to the most unusual.</h3>
     
     <h3>I practice what I preach and implement all the skills and tools I teach you in therapy into my own life on a regular basis. 
     All the techniques I recommend to clients are ones that I have tried out for myself and found helpful. I really enjoy this 
     line of work and keep the flame burning with continuous training, peer consultation, and self-care.</h3>
    </b>
    <br />
    <br />
    <img src={seal} alt="seal" height="200" style={{"borderRadius":"50%"}} />
    </div>
    </>
}