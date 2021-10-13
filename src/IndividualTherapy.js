import { useEffect } from "react"
export default function IndividualTherapy() {
    useEffect(()=>{document.title="Individual Therapy | Mental Fitness Therapy"},[])
    return <>
    <div className="page-content">
        <h2>“If you are your own problem, then you can be your own solution.“</h2><br />
        <ul>
            <li>
                Issues: <ul>
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
            Modalities: <ul>
                <li>Short-Term Dynamic Psychotherapy (STDP)</li>
                <li>Internal Family Systems (IFS) </li>
                <li>Interpersonal Therapy (IPT)</li>
                <li>Attachment-Based Therapy</li>
                <li>Cognitive Behavioural Therapy (CBT)</li>
                <li>Dialectical Behavioral Therapy (DBT)</li>
                <li>Expressive Arts</li>
                <li>Emotional Freedom Technique (EFT-Tapping)</li>

            </ul>
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
        </ul>
    </div>
    </>
}