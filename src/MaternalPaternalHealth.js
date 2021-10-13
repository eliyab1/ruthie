import { useEffect } from "react"
export default function MaternalHealth() {
    useEffect(()=>{document.title="Maternal and Paternal Mental Health | Mental Fitness Therapy"},[])
    return <>
    <div className="page-content">
        <p>Postpartum depression and anxiety is notoriously common today. One in 7 new moms 
            meets criteria for postpartum depression and 1 in 10 new dads. The pre and postpartum time is an 
            optimal window to take care of new or pre-existing depression and anxiety, while the family is still in the early 
            stages of adjusting to the new baby. If depression and anxiety go untreated, they usually get worse over time and can 
            make parenting (and life in general) much more difficult. The good news is that there is a lot you can do to help prevent 
            postpartum depression and anxiety or reverse it in its tracks.</p>

        <p>Here are some red flags to watch out for. If you’re having any of these signs for more than a couple days, then I encourage you to seek help.</p>

        <ul style={{"listStyleType":"none"}}>
            <li>-Low mood, sadness, or tearfulness</li>
            <li>-Irritability, short-temper, getting easily triggered </li>
            <li>-Low energy, feeling like you’re walking through molasses</li>
            <li>-Unable to sleep when the baby is sleeping even though you are tired</li>
            <li>-Low appetite, forgetting to eat, or overeating</li>
            <li>-Feeling guilt and shame, feeling like a bad mom</li>
            <li>-Feeling disconnected from yourself and/or others</li>
            <li>-Feeling no joy or connection with the baby</li>
            <li>-Avoiding the baby</li>
            <li>-Having scary thoughts or images that bother you</li>
            <li>-Neglecting basic self-care and hygiene</li>
            <li>-Cognition problems (decision-making, planning, organizing, remembering, problem-solving) </li>
            <li>Signs of anxiety</li>
            <li>-Physical signals (such as shallow breathing, increased heart rate, feeling tense, restless, headaches)</li>
            <li>-Excessive worrying (including catastrophic thoughts)</li>
            <li>-Excessive checking on the baby</li>
            <li>-Constantly feeling keyed up or on edge</li>
            <li>Signs of mania</li>
            <li>-Having a lot of energy (can be unusually productive or agitated/restless/anxious) </li>
            <li>-Reduced need for sleep</li>
            <li>Signs of psychosis</li>
            <li>-Hallucinations or delusions</li>
            <li>-Loss of touch with reality</li>
            <li>-Cognitive disorganization, confusion, or disorientation</li>
            <li>-Symptoms often  wax and wane</li>
        </ul>

    <p>*Postpartum psychosis is a psychiatric emergency that needs immediate evaluation and treatment. </p>

    <ul style={{"font-size":"23px"}}>Here are some things I can help you with: 
        <li>Assessment, diagnosis, and treatment of Pperinatal mood and anxiety disorders (depression, anxiety, bipolar, OCD, psychosis)</li>
        <li>Birth and postpartum planning for new parents/families</li>
        <li>Postpartum adjustment for new moms/dads/families</li>
        <li>Pregnancy after infertility</li>
        <li>Birth trauma</li>
        <li>Building attachment</li>
        <li>Integrating parenthood into identity</li>
        <li>Navigating career with motherhood</li>
        <li>Postpartum depression and anxiety in dads/partners</li>
    </ul>
    </div>
    </>
}