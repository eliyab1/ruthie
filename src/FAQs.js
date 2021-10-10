import { useEffect } from "react"
export default function FAQs() {
    useEffect(()=>{document.title="FAQ's | Mental Fitness Therapy"},[])
    return <>
    <div className="page-content">
        <ul style={{"font-size":"23px"}}>
            <li>Do you do initial phone consultations? </li>
            <p style={{"font-size":"15px"}}>Yes, I do a free no-obligation 10-15 minute phone consultation to touch base about your reasons 
            and expectations for therapy to determine if we can work together.  I invite you to ask any questions you may have before starting therapy.</p>
            <li>What happens in the first session?</li>
            <p style={{"font-size":"15px"}}>The first meeting is 50 minutes in length (unless pre-agreed otherwise
                ) and includes a discussion about informed consent,  assessment, and goal-setting.  The focus of this appointment is to get to 
                know something about each other,  join forces in understanding your situation, and to arrive at a consensus about your goals and the steps 
                needed to reach them.</p>
            <li>How do I optimize my therapy experience?</li>
            <p style={{"font-size":"15px"}}>That’s a great question! You can optimize you therapy before, during, and after sessions: 
                Before sessions: Set goals and intentions for the session. Prepare what you need, such as water, pen &amp; paper
                During the session: Show up with an open and curious mind. Maintain an internal focus. Be willing to slow down. Take risks and experiment with new learnings.  Share 
                honest feedback about what is working and what is not. After the session: Review your takeaways. Journal about your experience in the session. 
                Actively work on your goals and practice skills.</p>
            <li>How long do I need to be in therapy?</li>
            <p style={{"font-size":"15px"}}>The length of therapy varies from person to person depending on clinical needs, goals, motivation, integration of gains between 
                sessions, and situational factors. Some people can complete therapy in just a few sessions, while others may need a year or longer. Some roads are shorter and 
                some are longer with more mountainous terrain.  Therapy is about healing the nervous system. If it took years for symptoms to build up, then it will take 
                time for your nervous system to recalibrate.  The more kind you can be with yourself, the more quickly your nervous system will cooperate. </p>
            <li>How do I know if therapy is working?</li>
            <p style={{"font-size":"15px"}}>If the sessions help you feel more calm, curious, compassionate, confident, courageous, creative, and clear, then therapy is working. Here are some questions to ask yourself:
                -Do I feel that the therapist understands me and brings out the best in me? 
-Am I learning new things about myself and new skills that I can use?
-At the end of the session, am I feeling better and more hopeful? 
-How am I feeling physically at the end of therapy sessions?
-Do I usually look forward to the next session? 
-Am I better able to handle triggering situations than I was before seeking therapy? 
-Am I making better choices based on the contents from therapy?
Keep in mind that progress is nonlinear and having dips is a normal part of recovery.  If the overall trajectory is trending upwards, the dips are becoming less frequent and less deep, and you can get back to baseline faster, this is a good sign.
.</p>
            <li>Is telehealth as effective as in-person therapy?</li>
            <p style={{"font-size":"15px"}}>Telehealth is as effective as in person therapy for most people and can be a great option for those who cannot travel to an office 
                or those who prefer to have appointments in your own environment. There are some situations where telehealth is contraindicated and in-person support is 
                preferential. Other than the convenience of telehealth, some therapeutic benefits include allowing the therapist to see you in your natural environment and...</p>
            <li>How much does therapy cost?<br />
                Fee:<br />
                Insurance: Superbills, Lyra, MHN-Cardinal Care<br />
                Payment methods: Venmo, Zelle, Paypal, Credit Card</li>
            <li>What is your cancellation policy?</li>
            <li>How soon can I expect to see progress?</li>
    </ul></div></>
}