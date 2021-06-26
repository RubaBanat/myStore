import React, { useEffect } from 'react';

import './product.css';
import { FaEye, FaCartPlus } from 'react-icons/fa';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Product({ product, addToCart, showDetail }) {
	useEffect(() => {
		AOS.init({
			offset: 200,
			duration: 600,
			easing: 'ease-in-sine',
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
		// <div className="productsDiv" data-aos="fade-left" data-aos-delay="500">
			<div className="container3">
				<div className="card3">
					<div className="imgBx3">
						<img
							src={product.image}
							alt="product"
							width="200"
						/>
					</div>
					<div className="content3">
						<p> Price :{product.price}</p>
						<OverlayTrigger
							placement="left"
							delay={{ show: 250, hide: 400 }}
							overlay={renderTooltip}
						>
							<span
								style={{ cursor: 'pointer' }}
								onClick={() => addToCart(product)}
							>
								<FaCartPlus size={30}  />
							</span>
						</OverlayTrigger>
						<OverlayTrigger
							placement="right"
							delay={{ show: 250, hide: 400 }}
							overlay={renderTooltip2}
						>
							<span
								style={{ marginLeft: '20%', cursor: 'pointer' }}
								onClick={() => showDetail(product)}
							>
								<FaEye size={30}  />
							</span>
						</OverlayTrigger>
					</div>
					<h2 className="productName"> {product.title}</h2>
				</div>
			</div>
		// </div>
	);
}

export default Product;
