import { useEffect } from "react"
import { Accordion } from "react-bootstrap"
export default function IndividualTherapy() {
    useEffect(()=>{document.title="Individual Therapy | Mental Fitness Therapy"},[])
    return <>
        <div className="individualDiv" style={{ "marginBottom":"14%" }}>
            <h2 style={{ "textAlign":"center","marginTop":"6%" }}>“If you are your own problem, then you can be your own solution.“</h2><br />
            <ul style={{ "margin":"4% 18% 8% 18%" }}>
                <li>Issues: </li>
                <ul>
                    <li>Depression</li>
                    <li>Anxiety</li>
                    <li>Bipolar</li>
                    <li>Relationship difficulties</li>
                    <li>Life transitions</li>
                    <li>Career and workplace issues</li>
                    <li>Sleep issues</li>
                    <li>Identity crisis</li>
                    <li>Trauma</li>
                </ul>
                <hr />
                <li>Modalities: </li>
                <Accordion>
                    <Accordion.Item eventKey="0">
                    <Accordion.Header>Short-Term Dynamic Psychotherapy (STDP)</Accordion.Header>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                    <Accordion.Header>Internal Family Systems (IFS) </Accordion.Header>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                    <Accordion.Header>Interpersonal Therapy (IPT)</Accordion.Header>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                    <Accordion.Header>Attachment-Based Therapy</Accordion.Header>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                    <Accordion.Header>Cognitive Behavioural Therapy (CBT): </Accordion.Header>
                    <Accordion.Body>CBT is an evidence-based modality that focuses on the connection 
                    between thoughts, feelings, and behaviors. The premise of CBT is that our thoughts influence our feelings and if 
                    we can change our thoughts to be more helpful, then we can change our feelings too. Our brain is programmed to 
                    automatically produce thoughts, many of which are neither helpful nor useful nor productive. When our brain produces 
                    too many automatic negative thoughts (ANTS), we can fall into depression or constant worrying. The  ANTS may feel 
                    true in the moment, but when we examine them under the microscope, we can see that they are actually quite distorted. 
                    We can then revise the unhelpful thoughts to be more realistic and helpful. CBT has many tools for editing unhelpful 
                    thoughts and beliefs and jumpstarting new behaviors.  Since CBT targets primarily the conscious regions of the brain 
                    and often does not reach the deeper unconscious layers, I use it in conjunction with other approaches that focus more 
                    on deeper brain healing. Learning CBT skills is like learning the therapy alphabet --they are foundational for daily 
                    life management and building capacity for deeper emotional work.</Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                    <Accordion.Header>Dialectical Behavioral Therapy (DBT): </Accordion.Header>
                    <Accordion.Body>DBT is an evidence-based treatment that is a  blend of eastern philosophy and western psychology. It is used to help 
                    people with managing emotions and relationships by teaching a plethora of skills in the following four areas: 
                    mindfulness, distress tolerance, emotional regulation, and interpersonal effectiveness. One of the main tenets of 
                    DBT is the idea of dialectics, which is a process for reconciling two opposites and finding some kind of synthesis or 
                    middle ground solution.  What is remarkable about DBT is its amazing repertoire of skills and tools, which are organized 
                    into neat categories, acronyms, and sequences. Like CBT, the DBT skills are foundational for increasing emotional strength 
                    and can go a long way on their own. They are very useful for people wanting to work through more activating material without 
                    getting overwhelmed. I make an effort to incorporate DBT skills organically into the conversations and support you with 
                    reinforcing the skills in the sessions and for homework.</Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                    <Accordion.Header>Expressive Arts: </Accordion.Header>
                    <Accordion.Body>When words are not enough to convey your experience, we can turn to the arts. Visual arts, poetry, music, drama, and movement 
                    are the language of emotions and are useful for integrating the right and left brain, the brain and body, and the conscious 
                    and unconscious. How we create art mirrors how we create our daily lives. The creative process provides an opportunity to 
                    practice mindfulness, problem-solving, decision-making, flexibility, adaptability, accountability, confidence, self-care and 
                    to overcome harshness, perfectionism, impulsivity, excessive criticism and other unhelpful patterns right in the moment. Being 
                    a lifelong student of the visual arts and having training in art therapy,  I welcome incorporating creative modalities of your 
                    choice into therapy.</Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7">
                    <Accordion.Header>Emotional Freedom Technique (EFT-Tapping): </Accordion.Header>
                    <Accordion.Body>EFT is a holistic healing technique that harnesses the power of acupressure, which is like acupuncture without the needles. It works by systematically 
                    tapping on pressure points on the body that correspond to many parasympathetic nerve endings (which help you relax).  The 
                    combination of tapping while mindfully processing distressing material helps integrate emotions and thoughts with the body to 
                    reduce distress about the problem at hand. Even without the processing, just the tapping on its own can be beneficial. EFT has 
                    been shown to be helpful for anxiety, irritability, difficult emotions, 
                    physical pain, insomnia, phobias, and trauma activation. This is a great tool to practice in the sessions and reinforce at home.</Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </ul>
        </div>
    </>
}