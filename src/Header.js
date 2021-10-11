import favicon from "./favicon.PNG"
export default function Header() {
return  <>  <div className="flex-box">
                <div className="left-titles" >
                    <h1 className="title" style={{margin: "8px 50px"}}>Mental Fitness Therapy</h1>
                    <h3 style={{"margin":"8px 260px 8px 100px"}}>Your Psychological Gym</h3>
                </div>
                <div>
                    <img src={favicon} height="100" alt="logo" />
                </div>
                <div className="right-titles">
                    <h2 className="title" style={{"margin":"8px 85px"}}>Ruthie Ayzenberg LMFT LPCC PMH-C</h2>
                </div>
            </div>
        </>
    }