import React, { useEffect } from 'react';
import './product.css'
import { FaEye, FaCartPlus } from "react-icons/fa";
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import AOS from "aos";
import "aos/dist/aos.css";

function Product({ product, addToCart }) {
	useEffect(() => {
		AOS.init({
			offset: 200,
			duration: 600,
			easing: "ease-in-sine",
			delay: 100,
		});
		AOS.refresh();
	}, []);
	const renderTooltip = (props) => (
		<Tooltip id="button-tooltip" {...props}>
			Add To Cart
		</Tooltip>
	);
	const renderTooltip2 = (props) => (
		<Tooltip id="button-tooltip" {...props}>
			View Details
		</Tooltip>
	);
	return (
		<div className='productsDiv' data-aos="fade-left" data-aos-delay="500">
			<div class="container3">
				<div className='card3'>
					<div className='imgBx3'>
						<img src={product.image} alt="product image" width='200' />
					</div>
					<div className="content3">
						<p> Price :{product.price}</p>
						<OverlayTrigger
							placement="left"
							delay={{ show: 250, hide: 400 }}
							overlay={renderTooltip}
						>
							<a style={{ cursor: 'pointer' }} onClick={() => addToCart(product)}><FaCartPlus size={30} color="#b76e78" /> </a>
						</OverlayTrigger>
						<OverlayTrigger
							placement="right"
							delay={{ show: 250, hide: 400 }}
							overlay={renderTooltip2}
						>
						<a style={{ marginLeft: '20%', cursor: 'pointer' }} > <FaEye size={30} color="#b76e78" /></a>
						</OverlayTrigger>
					</div>
					<h2 class="productName"> {product.title}
					</h2>
				</div>
			</div>
		</div>

	);
}

export default Product;

