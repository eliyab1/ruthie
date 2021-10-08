import { useEffect } from "react"
export default function MaternalHealth() {
    useEffect(()=>{document.title="Maternal Health | Mental Fitness Therapy"},[])
    return <>
    <div className="page-content">
    <ul style={{"font-size":"23px"}}>
        <li>Perinatal mood and anxiety disorders</li>
        <li>Birth and postpartum planning for new parents/families</li>
        <li>Postpartum adjustment for new moms/dads/families</li>
        <li>Pregnancy after infertility</li>
        <li>Birth trauma</li>
        <li>Building attachment</li>
        <li>Postpartum depression and anxiety in dads/partners</li>
    </ul>
    </div>
    </>
}