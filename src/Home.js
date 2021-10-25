import { useEffect } from "react"
import { Carousel, CarouselItem } from "react-bootstrap"
import a from "./ferns 1.jpg"
import b from "./ferns 2.jpg"
import c from "./tree.jpg"
import d from "./tree network.jpg"
import e from "./neuronscape connecting synapse.jpg"
import f from "./Synapse weights .jpg"
export default function Home() {
    useEffect(()=>{document.title="Mental Fitness Therapy"})
    return <>
            <div className="page-content">
                <h3>Welcome to Mental Fitness Therapy, where we build emotional muscles and psychological flexibility for a healthy and
                    happy life. Getting into shape, both physically and mentally, requires some initial concerted effort, but with practice the 
                    process becomes organic and enjoyable.</h3><br />
                    <h3>Think of therapy as your mental wellness gym, a space where you can set goals, learn 
                    about yourself, get active, practice new skills, experiment with new behaviors, challenge yourself, reward yourself, 
                    and transform. And all of this without a sweat!
                    </h3><br />
                    <Carousel>
                        <CarouselItem>
                            <img
                                className="d-block w-100"
                                src={a}
                                alt="first slide"
                            />    
                        
                        <Carousel.Caption style={{"fontWeight":"bold" }}>
                            <h3>ferns 1</h3>
                            <p>enter text here</p>
                        </Carousel.Caption>
                        </CarouselItem>
                        <CarouselItem>
                            <img
                                className="d-block w-100"
                                src={b}
                                alt="second slide"
                            />
                        <Carousel.Caption style={{ "fontWeight":"bold" }}>
                            <h3>ferns 2</h3>
                            <p>enter text here</p>
                        </Carousel.Caption>
                        </CarouselItem>
                        <CarouselItem style={{ "color":"darkslategray","fontWeight":"bold" }}>
                            <img
                                className="d-block w-100"
                                src={c}
                                alt="third slide"
                            />
                        <Carousel.Caption style={{ "fontWeight":"bold" }}>
                            <h3>tree</h3>
                            <p>enter text here</p>
                        </Carousel.Caption>
                        </CarouselItem>
                        <CarouselItem>
                            <img
                                className="d-block w-100"
                                src={d}
                                alt="fourth slide"
                            />
                        <Carousel.Caption style={{"fontWeight":"bold" }}>
                            <h3>tree network</h3>
                            <p>enter text here</p>
                        </Carousel.Caption>
                        </CarouselItem>
                        <CarouselItem>
                            <img
                                className="d-block w-100"
                                src={e}
                                alt="fifth slide"
                            />
                        <Carousel.Caption style={{ "color":"darkslategray","fontWeight":"bold" }}>
                            <h3>neuronscape connecting synapse</h3>
                            <p>enter text here</p>
                        </Carousel.Caption>
                        </CarouselItem>
                        <CarouselItem>
                            <img
                                className="d-block w-100"
                                src={f}
                                alt="sixth slide"
                            />
                        <Carousel.Caption style={{ "fontWeight":"bold" }}>
                            <h3>Synapse weights</h3>
                            <p>enter text here</p>
                        </Carousel.Caption>
                        </CarouselItem>
                    </Carousel>
                    <br />
                    <h4>VIDEO or IMAGE or BIG TABS…TBD
                        NEEDS: PROFESSIONAL HEADSHOT
                        VIDEO script and 1 min commercial or 5 min interview
                        LOGO: Going up the slide, ladder, stairs, 
                        COLOR SCHEME:
                        IMAGES: Homepage background banner (something bold, fitness related)
                        Individual therapy image (climbing a DNA ladder or something)
                        Maternal MH image (working out with the baby or something) 
                        Group therapy image 
                    </h4>
            </div>
    </>
}