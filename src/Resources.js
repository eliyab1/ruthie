import { useEffect } from "react"
export default function Resources() {
    useEffect(()=>{document.title="Resources | Mental Fitness Therapy"},[])
    return <div className="page-content"><h2><u>Helpful Resources For Pregnancy and Postpartum</u></h2>
                <div className="resources">
                    <h3>Postpartum support international:</h3> <a   href="http://www.postpartum.net">http://www.postpartum.net</a><br />
                    <h3>Postpartum Depression support online:</h3> <a href="http://www.ppdsupportpage.com">http://www.ppdsupportpage.com</a><br />
                    <h3>Las Madres. Support for moms based on baby’s year of birth. Also has working moms group.</h3> <a href="http://www.lasmadres.com">http://www.lasmadres.com</a><br />
                    <h3>Postpartum Depression Stress Line<br />
                        Opened 9 am-9pm, PST, 1-888-773-7090</h3>
                    <h3>Support for Dads:</h3> <a href="http://www.postpartumdads.org">http://www.postpartumdads.org</a><br />
                    <h3>Gottman Bringing Baby Home Workshops</h3> <a href="https://www.gottman.com/parents/new-parents-workshop/">https://www.gottman.com/parents/new-parents-workshop/</a><br />
                    <h3>Pregnancy and Infant Loss:</h3> <a href="http://www.handonline.org/">http://www.handonline.org/</a><br />
                    <h3>MORE STUFF TBD….</h3>
                </div>
            </div>
}