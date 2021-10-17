import { useState } from "react"
import { Alert } from "react-bootstrap"
import warning from "./warning.png"
export default function Construction() {
    const [show,setShow] = useState(true)

    return show && <Alert variant="warning" style={{"marginBottom":"0px"}} dismissible onClose={() => setShow(false)}>
              <img src={warning} alt="warning" />
              This site is under construction
            </Alert>
            
}