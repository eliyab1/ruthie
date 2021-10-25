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

    <h3>I believe that laughter, creativity, and joy have a space in the therapy room as much as the difficult emotions.  My goal is to 
        provide you with therapy that is focused, effective, and also fun. To do this, we orient therapy around 3 pillars: emotional 
        and cognitive processing, practical skill-building, and integrating therapy material into your daily life. We use a variety of 
        techniques, depending on your needs and preferences. Some modalities I use (most of which are evidence-based) are Short-Term 
        Dynamic Psychotherapy, Cognitive Behavioral Therapy (CBT), Dialectical Behavioral Therapy (DBT), Internal Family Systems (IFS), 
        Art Therapy, Attachment-Based, Interpersonal Psychotherapy (IPT), and Trauma-Informed Care.</h3>
     
     <h3>All the techniques I recommend to clients are ones that I have tried out for myself and found helpful. I practice what I preach 
         and use all the skills and tools I teach you in therapy into my own life as well. I really enjoy this 
        line of work and keep the flame burning with continuous training, peer consultation, and self-care so I can show up for you at my 
        best capacity.</h3>

     <h3>Throughout treatment I will remain active, supportive, and practical.  Since having a strong alliance is essential for therapeutic 
         success, I encourage you to provide ongoing honest feedback  about what is working for you and what is not so that we can make the 
         necessary changes.</h3>
    </b>
    <br />
    <br />
    <img src={seal} alt="seal" height="200" style={{"borderRadius":"50%"}} />
    </div>
    </>
}