import { useEffect } from "react"
export default function Contact() {
    useEffect(()=>{document.title="Contact | Mental Fitness Therapy"},[])
    return <div className="page-content"><h3>Feel free to call or send me a message to set up an appointment or if you have any other questions.  Please include your name and phone number so I can get back to you. I generally respond to inquiries within 48 hours. 
        Please keep in mind that electronic messaging is not a secure form of communication so it’s best to leave sensitive information out.  If you need help with a psychiatric emergency, call 911 immediately.</h3><br />
    <h3>Phone number: <a href="tel:6504197004">(650)-419-7004</a> </h3><br />
    <h3>Email: <a href="mailto:ruthie@mentalfitnesstherapy.org">ruthie@mentalfitnesstherapy.org</a></h3></div>
}