import React from "react";
// import {
//     CarouselProvider,
//     Slider,
//     Slide,
//     ButtonBack,
//     ButtonNext,
//     SliderContext,
//     CarouselContext
// } from "pure-react-carousel";
// import Image from 'next/image'
import { } from 'react-bootstrap'
// import "pure-react-carousel/dist/react-carousel.es.css";
import 'bootstrap/dist/css/bootstrap.css';
// import vacances from "../img/slideshow/vacances.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Carousel3 = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className="w-75 m-auto m-5">
            <h2 className="m-5">Top catégories</h2>
            <Carousel responsive={responsive}
                // infinite={true}
                autoPlay={true}
                autoPlaySpeed={120000}
            >
                <div className="">
                    <div className="display-relative carousel_img_container rounded me-3 bg-primary">
                        <img className="img_carousel" src="/img/carousel/vetements.avif" />
                        <h4 className="display-absolute fixed-bottom text-white text-center">Vêtements</h4>
                    </div>

                </div>
                <div>
                    <div className="carousel_img_container rounded mx-3  bg-primary">
                        <img className="img_carousel" src="/img/carousel/offre-emploi.avif" />
                        <h4 className="display-absolute fixed-bottom text-white text-center">Offre d'emploi</h4>
                    </div>

                </div>
                <div>
                    <div className="carousel_img_container rounded mx-3  bg-primary">
                        <img className="img_carousel" src="/img/carousel/vacances.avif" />
                        <h4 className="display-absolute fixed-bottom text-white text-center">Vacances</h4>
                    </div>

                </div>
                <div>
                    <div className="carousel_img_container rounded mx-3  bg-primary">
                        <img className="img_carousel" src="/img/carousel/vente-immo.avif" />
                        <h4 className="display-absolute fixed-bottom text-white text-center">Vente immo</h4>
                    </div>

                </div>
                <div>
                    <div className="carousel_img_container rounded mx-2  bg-primary">
                        <img className="img_carousel" src="/img/carousel/voitures.avif" />
                        <h4 className="display-absolute fixed-bottom text-center text-white">Voitures</h4>
                    </div>

                </div>
            </Carousel>
        </div>
    )
}

export default Carousel3