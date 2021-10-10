import { useEffect } from "react"
export default function IndividualTherapy() {
    useEffect(()=>{document.title="Individual Therapy | Mental Fitness Therapy"},[])
    return <>
    <div className="page-content">
        <h2>“If you are your own problem, then you can be your own solution.“</h2><br />
        <ul style={{"list-style-type":"none"}}>
            <li>
                Issues: <ul style={{"list-style-type":"none"}}>
                    <li>Depression</li>
                    <li>Anxiety</li>
                    <li>Bipolar</li>
                    <li>Relationship difficulties</li>
                    <li>Life transitions</li>
                    <li>Career and workplace issues</li>
                    <li>Identity crisis</li>
                </ul>
            </li>
            <li>
            Modalities:
            </li>
            <li>
            What to expect:
            </li>
            <p>Throughout treatment I will remain active, supportive, and practical. To accelerate treatment, I use evidence-based methods to help 
                you build emotional capacity to let go of self-defeating behaviors in order to access and work through the feelings that are causing 
                your distress so that you can experience greater emotional freedom and symptom resolution. To this effect, I will challenge you in 
                identifying  behaviors that are unhelpful to you and encourage you to turn toward healthier ways of relating with yourself and others. 
                Since having a strong alliance is essential for  therapeutic success, I encourage you to provide ongoing honest feedback  about what 
                is working for you and what is not so that we can make the necessary changes.</p>
            <p>If we agree that you could benefit from additional appointments, we  can discuss the frequency and duration to best suit your needs.</p>
        </ul>
    </div>
    </>
}