import { Link, useParams } from 'react-router-dom'
import { useState, useContext } from 'react'

//import css
import './Detail.css'

//importing modal
import SocialModal from '../Modals/SocialModal.js'

//import data
import ProductData from '../../Data/data.jsx';

//importing cart context
import {CartContext} from '../../Context/MainContext.js';

const Detail = () => {
	const { id } = useParams();
	const [image, setImage] = useState("img-1");
	const [detail, setDetail] = useState("more-detail-1");
	const {cartItem, addToCart, buyItem} = useContext(CartContext);
	const [showSocialModal, setShowSocialModal] = useState(false);

	return ( 
		<>
			{showSocialModal && <SocialModal showSocialModal={showSocialModal} setShowSocialModal={setShowSocialModal} />}		
			
			{
				ProductData.filter(item => item.id === id).map((item, index) => (
					<section className="product-detail" key={index}>
						<div className="detail-col-1">
							<div className="row-1">
								<div className="product-brand">
									<p>{item.brand}</p>
								</div>

								<div className="product-name">
									<p>{item.name}</p>
								</div>

								<div className="product-status">
									<p>10+ in stock </p>
									<p>23% discount</p>
									<p>2 years guarentee</p>
								</div>

								<div className="product-price">
									<p>$ {item.price}</p>
									<p>23% discount offer (- $ 500)</p>
								</div>

								<div className="product-description">
									<p>Mauris consequat consequat enim, non auctor massa ultrices non. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
								</div>

								<div className="product-buttons">
									<div>
										<i className="far fa-bookmark" aria-hidden="true"></i>
									</div>
									<div className={cartItem.find(item => item.id === id) ? "cart-clicked" : ""} onClick={() => addToCart(item.id, item.image, item.name, item.price, item.quantity)}>
										<i className={cartItem.find(item => item.id === id) ? "fa fa-check" : "far fa-cart-plus"} aria-hidden="true"></i>
									</div>
									<div onClick={() => setShowSocialModal(prev => !prev)}>
										<i className="far fa-share" aria-hidden="true"></i>
									</div>
									<Link to="/cart" onClick={() => buyItem(item.id, item.image, item.name, item.price, item.quantity)}>
										<button>Buy Now</button>
									</Link>
								</div>
							</div>

							<div className="row-2">
								<ul>
									<li className={detail==="more-detail-1" ? "more-detail-active" : ""} onClick={() => setDetail("more-detail-1")}>Specifications</li>
									<li className={detail==="more-detail-2" ? "more-detail-active" : ""} onClick={() => setDetail("more-detail-2")}>Delivery, Return & Warrenty</li>
									<li className={detail==="more-detail-3" ? "more-detail-active" : ""} onClick={() => setDetail("more-detail-3")}>Reviews</li>
									<li className={detail==="more-detail-4" ? "more-detail-active" : ""} onClick={() => setDetail("more-detail-4")}>About {item.brand}</li>						
								</ul>

								<div className="more-detail">
								{
									detail === "more-detail-1" && (
										<div className="more-detail-1">
											<div className="specs-1">
												<p>Brand: <span></span></p>
												<p>Model: <span></span></p>
												<p>Gender: <span></span></p>
												<p>Limited Edition:<span></span> </p>
												<p>Water Resistance: <span></span></p>
												<p>Analog/Digital: <span></span></p>
												<p>Primary Material: <span></span></p>
												<p>Glass: <span></span></p>
												<p>Clasp Type: <span></span></p>
											</div>
											<div className="specs-2">
												<p>Case Shape: <span></span></p>
												<p>Case Depth: <span></span></p>
												<p>Case Width: <span></span></p>
												<p>Strap Type: <span></span></p>
												<p>Strap Color: <span></span></p>
												<p>Hands: <span></span></p>
												<p>Luminescent Hands: <span></span></p>
												<p>Movement: <span></span></p>
												<p>Movement Calibre: <span></span></p>
											</div>
										</div>
									)
								}

								{
									detail === "more-detail-2" && (
										<div className="more-detail-2">
											<div className="delivery-info">
												<i className="far fa-home" aria-hidden="true"></i>														
												<div>
													<p>Home Delivery</p>
													<p>4-5 days</p>
												</div>
											</div>
											<div className="cash-info">
												<i className="far fa-money-bill-wave" aria-hidden="true"></i>														
												<div>
													<p>Cash On Delivery</p>
													<p>Available</p>
												</div>
											</div>
											<div className="return-info">
												<i className="far fa-undo-alt" aria-hidden="true"></i>														
												<div>
													<p>7 Days Returns</p>
													<p>Change of mind is not applicable</p>
												</div>
											</div>
											<div className="warrenty-info">
												<i className="far fa-shield-alt" aria-hidden="true"></i>														
												<div>
													<p>Warrenty</p>
													<p>Available</p>
												</div>
											</div>
										</div>
									)
								}

								{
									detail === "more-detail-3" && (
										<div className="more-detail-3">
											No review at the moment...
										</div>
									)
								}

								{
									detail === "more-detail-4" && (
										<div className="more-detail-4">
											<p>Mauris consequat consequat enim, non auctor massa ultrices non. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
											
											<p>Mauris consequat consequat enim, non auctor massa ultrices non. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris consequat consequat enim, non auctor massa ultrices non. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris consequat consequat enim, non auctor massa ultrices non. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>

											<div className="brand-socials">
												<Link to="#"><i className="fab fa-facebook-f" aria-hidden="true"></i></Link>
												<Link to="#"><i className="fab fa-instagram" aria-hidden="true"></i></Link>
												<Link to="#"><i className="fab fa-twitter" aria-hidden="true"></i></Link>
												<Link to="#"><i className="fa fa-globe-americas" aria-hidden="true"></i></Link>												
												<Link to="#"><i className="fa fa-envelope" aria-hidden="true"></i></Link>
											</div>
										</div>
									)
								}
								</div>
							</div>
						</div>

						<div className="detail-col-2">
							<div className="row-1">
								{image === "img-1" && <img src={item.image} alt={item.image} />}
								{image === "img-2" && <img src={item.image} alt={item.image} />}
								{image === "img-3" && <img src={item.image} alt={item.image} />}
								{image === "img-4" && <img src={item.image} alt={item.image} />}
							</div>
							<div className="row-2">
								<img src={item.image} alt={item.image} onClick={() => setImage("img-1")} className={image==="img-1" ? "detail-image active" : "detail-image"} />
								<img src={item.image} alt={item.image} onClick={() => setImage("img-2")} className={image==="img-2" ? "detail-image active" : "detail-image"} />
								<img src={item.image} alt={item.image} onClick={() => setImage("img-3")} className={image==="img-3" ? "detail-image active" : "detail-image"} />
								<img src={item.image} alt={item.image} onClick={() => setImage("img-4")} className={image==="img-4" ? "detail-image active" : "detail-image"} />
							</div>
						</div>
					</section>
				))
			}
		</>
	);
}

export default Detail;