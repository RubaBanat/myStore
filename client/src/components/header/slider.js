import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import './slider.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Slideshow() {
	useEffect(() => {
		AOS.init({
			offset: 200,
			duration: 600,
			easing: 'ease-in-sine',
			delay: 100,
		});
		AOS.refresh();
	}, []);

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
						<Carousel.Caption data-aos="flip-down" data-aos-delay="500">
							<h3
								style={{
									float: 'left',
									fontSize: '50px',
									marginBottom: '130px',
								}}
							>
								Be Fashion Ready
							</h3>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://myshagraphy.com/wp-content/uploads/2017/08/slider-image-7.jpg"
							alt="Second slide"
							style={{ height: '74.4vh' }}
						/>

						<Carousel.Caption data-aos="flip-down">
							<h3
								style={{
									fontSize: '60px',
									marginBottom: '150px',
									float: 'right',
								}}
							>
								Trendy Fashion
							</h3>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://myshagraphy.com/wp-content/uploads/2017/08/slider-image-1.jpg"
							alt="Third slide"
							style={{ height: '74.4vh' }}
						/>

						<Carousel.Caption data-aos="flip-down">
							<h3
								style={{
									fontSize: '40px',
									marginBottom: '150px',
									float: 'right',
								}}
							>
								It's All New , Latest Collection
							</h3>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>
		</>
	);
}
export default Slideshow;
