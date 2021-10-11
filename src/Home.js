import { useEffect } from "react"
export default function Home() {
    useEffect(()=>{document.title="Mental Fitness Therapy"})
    return <>
            <div className="page-content">
                <h3>Welcome to Mental Fitness Therapy, where we build emotional muscles and psychological flexibility for a healthy and
                    happy life. Getting into shape, both physically and mentally, requires some initial concerted effort, but with practice the 
                    process becomes organic and enjoyable.</h3>
                    <h3>Think of therapy as your mental wellness gym, a space where you can set goals, learn 
                    about yourself, get active, practice new skills, experiment with new behaviors, challenge yourself, reward yourself, 
                    and transform.
                    </h3>
                    <h4>VIDEO or IMAGE or BIG TABS…TBD
                        NEEDS: PROFESSIONAL HEADSHOT
                        VIDEO script and 1 min commercial or 5 min interview
                        LOGO
                        COLOR SCHEME
                        IMAGES: Homepage background banner (something bold, fitness related)
                        Individual therapy image (climbing a DNA ladder or something)
                        Maternal MH image (working out with the baby or something) 
                        Group therapy image 
                    </h4>
            </div>
    </>
}