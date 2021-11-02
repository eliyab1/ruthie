import { useEffect } from "react"
import { Accordion } from "react-bootstrap"
export default function PostpartumParents() {
    useEffect(()=>{document.title="Postpartum Parents | Mental Fitness Therapy"},[])
    return <>
    <div style={{ "textAlign":"left","margin":"3% 20% 4% 20%"}}>
        <h2 style={{ "textAlign":"center"}}><u>Postpartum Parents</u></h2><br /><br />
        <p>Postpartum depression and anxiety are the most common complications of pregnancy.  One in seven new moms meets criteria for postpartum depression, 
            which often co-occurs with anxiety. Many mothers feel that something is wrong, but don’t speak up or ask for help. Unfortunately, maternal depression 
            is underscreened in doctor offices, leaving many mothers to suffer in silence without understanding what’s going on. There are many factors that 
            contribute to depression and anxiety--hormones, sleep scarcity, lack of support, epigenetic predispositions, etc--the symptoms are NEVER the mother’s 
            fault. However, they do need attention and getting treatment can help make a u-turn sooner rather than later. If depression and anxiety go untreated, 
            they usually get worse over time and can make parenting (and life in general) much more difficult than it has to be.</p>
        <br />
        <p>The good news is that there is a lot you can do to help prevent postpartum depression and anxiety or reverse it in its tracks.  The pre and postpartum 
            time is an optimal window to take care of new or pre-existing depression and anxiety, while the family is still in the early stages of adjusting to the 
            new baby.<b>The best gift you can give to your family is your mental health.</b></p>
        </div>
        <div className="pp">
    <div className="pp-leftDiv" >
        <p>Depression and anxiety can show up in many ways. <b>Here are some red flags to watch out for...</b></p>
            <Accordion>
            <Accordion.Item eventKey="0">
            <Accordion.Header>Signs of Depression</Accordion.Header> 
            <Accordion.Body>
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
            <li>-Cognition problems (decision-making, planning, organizing, remembering, problem-solving)</li>
            </ul>
            </Accordion.Body>
            </Accordion.Item>
           <br />
            <Accordion.Item eventKey="1">
            <Accordion.Header>Signs of Anxiety</Accordion.Header>
            <Accordion.Body>
            <ul style={{"listStyleType":"none"}}>
            <li>-Physical signals (such as shallow breathing, increased heart rate, feeling tense, restless, headaches)</li>
            <li>-Excessive worrying (including catastrophic thoughts)</li>
            <li>-Excessive checking on the baby</li>
            <li>-Constantly feeling keyed up or on edge</li>
            </ul>
            </Accordion.Body>
            </Accordion.Item>
            <br />
            <Accordion.Item eventKey="2">
            <Accordion.Header>Signs of Mania</Accordion.Header>
            <Accordion.Body>
            <ul style={{"listStyleType":"none"}}>
            <li>-Having a lot of energy (can be unusually productive or agitated/restless/anxious)</li>
            <li>-Reduced need for sleep</li>
            </ul>
            </Accordion.Body>
            </Accordion.Item>
            <br />
            <Accordion.Item eventKey="3">
            <Accordion.Header>Signs of Psychosis</Accordion.Header>
            <Accordion.Body>
            <ul style={{"listStyleType":"none"}}>
            <li>-Hallucinations or delusions</li>
            <li>-Loss of touch with reality</li>
            <li>-Cognitive disorganization, confusion, or disorientation</li>
            <li>-Symptoms often wax and wane</li>
            </ul>
            </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        <br />
        <p>*Postpartum psychosis is a psychiatric emergency that needs immediate evaluation and treatment. </p>

    <p><b>If you’re having any of these signs for more than a couple days, then I encourage you to seek help.</b></p>
    </div>
    <div className="pp-rightDiv">
    <ul>
        <p>Here are some things I can help you with:</p>
        <li>Assessment, diagnosis, and treatment of perinatal mood and anxiety disorders (depression, anxiety, bipolar, OCD, psychosis)</li>
        <li>Birth and postpartum planning for new parents/families</li>
        <li>Postpartum adjustment for new moms/dads/families</li>
        <li>Pregnancy after infertility</li>
        <li>Birth trauma</li>
        <li>Building attachment</li>
        <li>Integrating parenthood into identity</li>
        <li>Navigating career with motherhood</li>
        <li>Postpartum depression and anxiety in dads/partners</li>
        <li>Joint counseling with partners &amp; family members</li>
        <li>Relapse prevention</li>
    </ul>
    </div>
    </div>
    </>
}