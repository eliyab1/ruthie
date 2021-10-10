import { useEffect } from "react"
import rus from "./rus.png"
import ruthie from "./ruthie.jfif"
import rut from "./rut.jpg"
import seal from "./seal.PNG"
export default function AboutMe() {
    useEffect(()=>{document.title="About Me | Mental Fitness Therapy"},[])
    return <><div className="page-content">
    <b>
    <h2>Ruthie Ayzenberg, LMFT, LPCC</h2>
    {/* <img src={rus} alt="Ruthie Ayzenberg" height="15%" style={{"border-radius":"75%"}} /> */}
    {/* <img src={ruthie} alt="Ruthie" style={{"border-radius":"75%"}} /> */}
   <img src={rut} alt="rut" height="300" style={{"border-radius":"75%"}} />
   <br />
   <br />
    <h3>I am a licensed Marriage and Family Therapist and Professional Clinical Counselor,  practicing therapy since 2013. 
    I completed the Counseling Psychology program at Santa Clara University, and over the years have worked with kids, teens, 
    families, and adults with a wide range of concerns across all levels of care from outpatient to hospital.  I have a 
    specialization in maternal mental health, including working with moms and dads facing pre/postpartum issues. I also 
    enjoy working with students, professionals, people with diverse backgrounds, and anyone who is motivated to do the therapy work.</h3>
     
    <h3>There’s a myth that therapy cannot be fun. The reality is that laughing, lightheartedness, creativity and joy have a space in the 
    therapy room as much as the difficult emotions.  My goal is to provide you with therapy that is focused, effective, and also fun 
    so that you can bring out your best self. To do this, we orient therapy around 3 pillars: emotional and cognitive processing, 
    practical skill-building, and integrating therapy material into your daily life. We use a variety of techniques, depending on 
    your needs and preferences. Some modalities I use (most of which are evidence-based) are Short-Term Psychodynamic Therapy, 
    Cognitive Behavioral Therapy (CBT), Dialectical Behavioral Therapy (DBT), Internal Family Systems (IFS), Art Therapy, 
    Attachment-Based, Interpersonal Psychotherapy (IPT), and Trauma-Informed Care.</h3>
     
     <h3>I practice what I preach and implement all the skills and tools I teach you in therapy into my own life on a regular basis. 
     All the techniques I recommend to clients are ones that I have tried out for myself and found helpful. I really enjoy this 
     line of work and keep the flame burning with continuous training, peer consultation, and self-care.</h3>
    </b>
    <br />
    <br />
    <img src={seal} alt="seal" height="200" style={{"border-radius":"50%"}} />
    <br />
    <small>Certification from Postpartum Support International Image Seal</small>
    <br />
    </div>
    </>
}