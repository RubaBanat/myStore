import React, { useState } from 'react';
import {Carousel} from "react-bootstrap";
import './slider.css';


function Slideshow() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <>
        <div className="slider">
            <Carousel fade activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.jssor.com/premium/fashion/img/glass-woman.jpg"
                        alt="First slide"
                        
                        
                        />
                    <Carousel.Caption>
                        <h3 style={{float:'left',fontSize:'50px',marginBottom:'130px'}}>Be Fashion Ready</h3>
                        {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://myshagraphy.com/wp-content/uploads/2017/08/slider-image-7.jpg"
                        alt="Second slide"
                        style={{height:'74.4vh'}}
                       
                    />

                    <Carousel.Caption>
                        <h3 style={{fontSize:'60px',marginBottom:'150px',float:'right'}}>Trendy Fashion</h3>
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://myshagraphy.com/wp-content/uploads/2017/08/slider-image-1.jpg"
                        alt="Third slide"
                        style={{height:'74.4vh'}}
                       
                    />

                    <Carousel.Caption>
                        <h3 style={{fontSize:'40px',marginBottom:'150px',float:'right'}}>It's All New , Latest Collection</h3>
                        {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>
        </>
    )

}
export default Slideshow;