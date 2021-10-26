import { useEffect } from "react"
import { Carousel, CarouselItem } from "react-bootstrap"
import a from "./ferns 2.jpg"
import b from "./tree.jpg"
import c from "./tree network.jpg"
import d from "./neuronscape connecting synapse.jpg"
import e from "./Synapse weights .jpg"
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
                    <Carousel variant="dark">
                        <CarouselItem interval={3500}>
                            <img
                                className="d-block w-100"
                                src={a}
                                alt="first slide"
                            />
                        </CarouselItem>
                        <CarouselItem interval={3500}>
                            <img
                                className="d-block w-100"
                                src={b}
                                alt="second slide"
                            />
                        </CarouselItem>
                        <CarouselItem interval={3500}>
                            <img
                                className="d-block w-100"
                                src={c}
                                alt="third slide"
                            />
                        </CarouselItem>
                        <CarouselItem interval={3500}>
                            <img
                                className="d-block w-100"
                                src={d}
                                alt="fourht slide"
                            />
                        </CarouselItem>
                        <CarouselItem interval={3500}>
                            <img
                                className="d-block w-100"
                                src={e}
                                alt="fifth slide"
                            />
                        </CarouselItem>
                        </Carousel>
            </div>
    </>
}