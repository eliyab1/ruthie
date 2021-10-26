import { useEffect } from "react"
import { Accordion } from "react-bootstrap"
import { Link } from "react-router-dom"
export default function IndividualTherapy() {
    useEffect(()=>{document.title="Individual Therapy | Mental Fitness Therapy"},[])
    return <>
        <div className="individualDiv" style={{ "margin":"3% 18% 14% 18%" }}>
            <h2 style={{ "textAlign":"center"}}><u>Individual Therapy</u></h2><br /><br />
            <h3 style={{ "textAlign":"center"}}>All people are welcome to my practice. It takes courage to seek help and it's never too late to create meaningful change. 
                We cannot underestimate the power of neuroplasticity (the brain’s ability to reorganize and wire new pathways) at any age, 
                which can be engaged through the combination of safety and mindfulness inherent in the therapeutic process.</h3>
            <br />
            <br />
            <h3>Here are some examples of concerns people show up with in my office:</h3>
            <br />
            <ul style={{ "listStyleType":"none" }}>
                <li>Depression:</li>
                    <p>Low mood, low energy, loss of joy, feeling detached, irritability, negative or critical thinking, ruminating, guilt &amp; shame, hopelessness, 
                        dysregulated sleep and eating, life feels like a drag more days than not.</p>
                <li>Anxiety:</li>
                    <p>Excessive worry, intrusive thoughts, catastrophizing, insomnia, physical tension, restlessness, agitation, shallow breathing, GI problems, 
                        headaches, unease in social situations.</p>
                <li>Bipolar Disorder:</li>
                    <p>Depression combined with at least one episode of mania or hypomania. Mania is characterized by a surge of energy, reduced need for sleep, 
                        hyperactivity, impulsivity, racing thoughts, feeling on top of the world or feeling extremely agitated.  Hypomania can include all of the 
                        above, but it’s less intense than mania. Someone with active mania requires medical stabilization and a higher level of care than I can provide. 
                        However, I can help with mania aftermath and relapse prevention once psychiatric stabilization has occurred.</p>
                <li>Prenatal/postpartum:</li>
                    <p><Link to="/services/postpartumparents">Go to section</Link></p>
                <li>Relationship difficulties:</li>
                    <p>Communicating, navigating boundaries, building secure attachment, difficulties starting, maintaining, or ending a relationship, managing 
                        conflict situations, etc.</p>
                <li>Life transitions:</li>
                    <p>Relocation adaptation, new job, new child, loss of a loved one, spiritual transitions (in either direction), gender transitioning, etc. 
                        Therapy can help with adjusting to new roles, rules, and environment and integrating the life changes into your identity. Integration 
                        means weaving together the new and old experiences, incorporating what you need, letting go of what you no longer need, and preserving 
                        what you want to hold on to.</p>
                <li>Career and workplace issues:</li>
                    <p>Challenging work environments, cultural vulnerabilities,  workaholism, perfectionism, feeling like an impostor, communication difficulties, 
                        anxiety at work, burnout, returning to work after maternity leave, balancing work and parenting, etc.</p>
                <li>Sleep issues:</li>
                    <p> Difficulty falling or staying asleep, middle of night awakenings and difficulty going back to sleep, waking up unrested, oversleeping, 
                        difficulty getting out of bed, sleep deprivation, disturbing dreams or nightmares, maximizing sleep postpartum.</p>
                <li>Trauma:</li>
                    <p>Trauma refers to any event(s) that was so scary or unsafe it overwhelmed your nervous system and left you frozen or without control. 
                        Trauma eludes a one size fits all definition, as it is in the eye of the beholder. Traumatic experiences literally get stuck in the 
                        body’s physiological patterns, creating an array of  psychological and physical symptoms. Therapy can help the nervous system relearn 
                        to feel safe so it can finally defrost and get unstuck from the trauma.</p>
                </ul>
                <hr />
                <h4>Modalities:</h4>
                <Accordion>
                    <Accordion.Item eventKey="0">
                    <Accordion.Header>Short-Term Dynamic Psychotherapy (STDP)</Accordion.Header>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                    <Accordion.Header>Internal Family Systems (IFS) </Accordion.Header>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                    <Accordion.Header>Interpersonal Therapy (IPT)</Accordion.Header>
                    <Accordion.Body>IPT is designed as a short-term evidence based therapy for depression, anxiety, and other ailments. 
                        IPT presumes that symptoms make sense in the context of relationship loss, change of identity roles, conflict, 
                        and isolation. I use IPT as a framework to examine relationship patterns and support changes towards healthy 
                        adaptation to new life circumstances.</Accordion.Body>
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
                    too many Automatic Negative Thoughts (ANTS), we can fall into depression or constant worrying. The  ANTS may feel 
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
        </div>
    </>
}