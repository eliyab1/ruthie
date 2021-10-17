import test1 from "./test1.jfif"
export default function Header() {
return  <>
        <div className="header">
                <div >
                    <h1>Mental Fitness Therapy</h1>
                    <h3 style={{"marginLeft":"15%"}}>Your Psychological Gym</h3>
                </div>
                <div >
                    <img src={test1} width="50%" alt="logo" style={{"display":"block","marginLeft":"33%","marginRight":"auto","borderRadius":"85%"}} />
                </div>
                <div>
                    <h2  >Ruthie Ayzenberg, LMFT, LPCC, PMH-C</h2>
                </div>
            </div>
        </>
    }