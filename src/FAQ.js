import  Accordion  from "react-bootstrap/Accordion"
import { useEffect } from "react"
export default function FAQ() {
    useEffect(()=>{document.title="FAQ | Mental Fitness Therapy"},[])
    return <>
    <div>
        <Accordion style={{"fontSize":"23px","width":"33%","margin":"5% 30% 7% 32%"}}>
            <Accordion.Item eventKey="0">
            <Accordion.Header>Do you do initial phone consultations? </Accordion.Header>
            <Accordion.Body style={{"fontSize":"15px"}}>Yes, I do a free no-obligation 10-15 minute phone consultation to touch base about your reasons 
            and expectations for therapy to determine if we can work together.  I invite you to ask any questions you may have before starting therapy.</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
            <Accordion.Header>What happens in the first session?</Accordion.Header>
            <Accordion.Body style={{"fontSize":"15px"}}>The first meeting is 50 minutes in length (unless pre-agreed otherwise) and includes a discussion about 
                informed consent,  assessment, and goal-setting.<br />
                The focus of this appointment is to get to 
                know something about each other,  join forces in understanding your situation, and to arrive at a consensus about your goals and the steps 
                needed to reach them.</Accordion.Body>
                </Accordion.Item>
            <Accordion.Item eventKey="2">
            <Accordion.Header>How do I optimize my therapy experience?</Accordion.Header>
            <Accordion.Body style={{"fontSize":"15px"}}>That’s a great question!<br />
                You can optimize you therapy before, during, and after sessions:<br />
                <b>Before sessions:</b> Set goals and intentions for the session:<br />
                    What is the internal emotional difficulty you need help with? <br />
                    What questions would you like to get more clarity on?<br />
                    What are some helpful topics you would like to cover in the session?<br />
                    Are there any skills you would like to learn or practice?<br />
                    What would you like to be different for you at the end of the session? <br />
                    Prepare what you need, such as water, pen &amp; paper<br />
                    Show up on time<br />
                <b>During the session:</b> Show up with an open and curious mind. Maintain an internal focus. Be willing to slow down. Take risks and experiment with new learnings.  Share 
                honest feedback about what is working and what is not.<br />
                <b>After the session:</b> Review your takeaways. Journal about your experience in the session. Actively work on your goals and practice skills.</Accordion.Body>
                </Accordion.Item>
            <Accordion.Item eventKey="3">
            <Accordion.Header>How long do I need to be in therapy?</Accordion.Header>
            <Accordion.Body style={{"fontSize":"15px"}}>The length of therapy varies from person to person depending on clinical needs, goals, motivation, integration of gains between 
                sessions, and situational factors. Some people can complete therapy in just a few sessions, while others may need a year or longer. Some roads are shorter and 
                some are longer with more mountainous terrain.  Therapy is about healing the nervous system. If it took years for symptoms to build up, then it will take 
                time for your nervous system to recalibrate.  The more kind you can be with yourself, the more quickly your nervous system will cooperate. </Accordion.Body>
                </Accordion.Item>
            <Accordion.Item eventKey="4">
            <Accordion.Header>How do I know if therapy is working?</Accordion.Header>
            <Accordion.Body style={{"fontSize":"15px"}}>If the sessions help you feel more calm, curious, compassionate, confident, courageous, creative, and clear, then therapy is working. 
                Here are some questions to ask yourself:<br />
                -Do I feel that the therapist understands me and brings out the best in me?<br />
                -Am I learning new things about myself and new skills that I can use?<br />
                -At the end of the session, am I feeling better and more hopeful?<br />
                -How am I feeling physically at the end of therapy sessions?<br />
                -Do I usually look forward to the next session?<br />
                -Am I better able to handle triggering situations than I was before seeking therapy?<br />
                -Am I making better choices based on the contents from therapy?<br />
                Keep in mind that progress is nonlinear and having dips is a normal part of recovery.  If the overall trajectory is trending upwards, the dips are 
                becoming less frequent and less deep, and you can get back to baseline faster, this is a good sign.</Accordion.Body>
                </Accordion.Item>
            <Accordion.Item eventKey="5">
            <Accordion.Header>How do I know if the therapist is a good fit for me?</Accordion.Header>
            <Accordion.Body style={{"fontSize":"15px"}}>
            The most important factor in healing is the therapeutic relationship. Without the foundation of a good therapeutic alliance, no amount of techniques or 
            interventions will suffice.<br />
            The second most important factor is therapist competence (the techniques and interventions). A therapist who is a good fit 
            will check both boxes. Feeling safe to be yourself with the therapist, feeling seen and understood, and feeling that the therapist has your best 
            interests in mind are all signs of a good relationship. Resonating with the methodology and noticing positive shifts in yourself is a sign of competence 
            (of both yourself and the therapist).<br />
            The first few sessions should give you enough information to know if it's a good fit. If you  have doubts about 
            goodness of fit, this is important to discuss with the therapist, as this would provide an opportunity to overcome any barriers or refer you to another 
            therapist if that’s in your best interest. 
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6"> 
            <Accordion.Header>What are some myths about therapy?</Accordion.Header>
                <Accordion.Body>
            <ul style={{"fontSize":"15px", "listStyleType":"none"}}>
                <li>1) Therapy works by osmosis. All I need to do is show up and wait for the therapist to do magic.<em>The fact is that
                therapy requires concerted efforts from both you and the therapist. By the effort is the reward.</em></li>
                <li>2) Therapy will fix all my problems. <em>The goal of therapy is not to engineer a problem-free life, although many problems
                    may be solved as a byproduct of therapy. The goal of therapy is to solve whatever problems are solvable and learn to coexist 
                    effectively with problems that cannot be solved.</em></li>
                <li>3) After completing therapy, I will never have another symptom again. <em>Remember that recovery is nonlinear and symptoms are not your enemies.
                    Symptoms are warning signs that something needs attention. Hopefully, therapy can teach you how to effectively attend to symptoms 
                    and make quick u-turns back towards a healthier baseline.</em></li>
                <li>4) Going to therapy means something is wrong with me. <em>There is nothing wrong with a person needing help. However, the judgment
                    about needing help is not useful.  In fact, seeking help indicates that something is right with you--it shows courage, humility, 
                    and attentiveness to your needs.</em></li></ul></Accordion.Body></Accordion.Item>
            <Accordion.Item eventKey="7">
            <Accordion.Header>Where does the therapy take place?</Accordion.Header>
            <Accordion.Body style={{"fontSize":"15px"}}>Meetings happen online on a confidential HIPAA-compliant platform...so you can wear sweatpants and
                skip the traffic. All you need is a private space and good internet connection.</Accordion.Body>
                </Accordion.Item>
            <Accordion.Item eventKey="8">
            <Accordion.Header>Is telehealth as effective as in-person therapy?</Accordion.Header>
            <Accordion.Body style={{"fontSize":"15px"}}>Telehealth is as effective as in person therapy for most people and can be a great option for those who cannot travel to an office 
                or those who prefer to have appointments in their own setting and save travel time. Other than the logistical convenience of telehealth, some therapeutic benefits 
                include:
                <p style={{"marginLeft":"5%"}}>
                -Allowing the therapist to see you in your natural environment<br />
                -Easier to include family members in the sessions, if needed. (This is especially convenient for mothers who want to work on attachment skills with their young children.)<br />
                -Some people report feeling more relaxed and safe being in their own space<br />
                -Videotherapy lends itself very well to some really valuable video-based interventions.</p>
                There are some situations where in-person support is preferential to telehealth. High risk crisis situations are better managed in the containment of an office. 
                Also, people who lack a safe and private setting are better suited for an office, as are people who have technological barriers (such as poor internet quality, difficulty 
                logging on). </Accordion.Body>
                </Accordion.Item>
            <Accordion.Item eventKey="9">
            <Accordion.Header>How much does therapy cost?</Accordion.Header>
            <Accordion.Body style={{"fontSize":"15px"}}>My fee is $180 for 50-minutes and due on the day of the appointment.<br />
                Payment methods: Venmo, Zelle, Paypal, and credit card (through Ivy Pay app).<br />
                Insurance/EAP: I contract with LYRA and MHN-Cardinal Care for Stanford University. If you have out-of-network benefits through your insurer, I’m happy to provide you with 
                a superbill which you can submit to your insurance for partial reimbursement.</Accordion.Body>
                </Accordion.Item>
            <Accordion.Item eventKey="10">
            <Accordion.Header>What is your cancellation policy?</Accordion.Header>
            <Accordion.Body style={{"fontSize":"15px"}}>I ask to be informed 24-hours prior to your appointment if you need to cancel or reschedule. Short notice cancellations (within 24 hours) and 
                no shows will require you to pay the fee, since that time was reserved specifically for you. I do allow one free cancellation pass in cases of emergencies.</Accordion.Body>
                </Accordion.Item>
        </Accordion>
    </div></>
}