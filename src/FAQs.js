import { useEffect } from "react"
export default function FAQs() {
    useEffect(()=>{document.title="FAQ's | Mental Fitness Therapy"},[])
    return <>
    <div className="page-content">
        <ul style={{"font-size":"23px"}}>
            <li>Do you do initial phone consultations? </li>
            <li>What happens in the first session?</li>
            <li>How do I optimize my therapy experience?</li> 
            <li>How do I know if a therapist is a good fit?</li>
            <li>Is telehealth as effective as in-person therapy?</li>
            <li>How much does therapy cost?<br />
                Fee:<br />
                Insurance: Superbills, Lyra, MHN-Cardinal Care<br />
                Payment methods: Venmo, Zelle, Paypal, Credit Card</li>
            <li>What is your cancellation policy?</li>
            <li>How soon can I expect to see progress?</li>
    </ul></div></>
}