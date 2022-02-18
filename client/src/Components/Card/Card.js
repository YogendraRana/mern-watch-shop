import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom';

//importing css file
import './Card.css'

//importing modal
import SocialModal from '../Modals/SocialModal.js'

//importing cart context
import {CartContext} from '../../Context/MainContext.js'

const Card = ({id, image, name, price, rating, quantity, length, count, show}) => {
	const {cartItem, addToCart, buyItem} = useContext(CartContext);	
	const [showSocialModal, setShowSocialModal] = useState(false);
	
	return(
		<>
			{showSocialModal && <SocialModal showSocialModal={showSocialModal} setShowSocialModal={setShowSocialModal} />}

			<div 
			className={`card-container slide-${show}`} 
			style={{
				transform: `translateX(-${count*100}%)`,
				transition: `all 0.4s cubic-bezier(0.68, -0.55,0.265, 1.55)`
			}}
			>
				<div className="card-wrapper">
					<div className="image">
						<img src={image} alt={image} />
					</div>

					<div className="card-content">
						<div className="card-rating">
							<div>
								<p>Rating</p>

								<div className="stars">
								{
									[1, 2, 3, 4, 5].map((val, index) => {
										return(
											<div key={index}>
												<i className={(rating + 1 === val + 0.5) ? "fas fa-star-half-alt" : (rating >= val) ? "fas fa-star" : "far fa-star"} aria-hidden='true' />
											</div>
										)		
									})
								}
								</div>
							</div>

							<span>$ {price}</span>
						</div>

						<div className="card-detail">
							<h4>{name}</h4>
							<p>
								Mauris consequat consequat enim, non auctor massa ultrices non.  
			            		Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
		            		</p>
						</div>

						<div className="btn-box">
							<div className="wish">
								<i className="far fa-bookmark" aria-hidden="true"></i>
							</div>

							<div className={cartItem.find(item => item.id === id) ? "cart clicked" : "cart"} onClick={() => addToCart(id, image, name, price, quantity)}>
								<i className={cartItem.find(item => item.id === id) ? "fa fa-check" : "far fa-cart-plus"} aria-hidden="true"></i>
							</div>

							<div className="share" onClick={() => setShowSocialModal(prev => !prev)}>
								<i className="far fa-share" aria-hidden="true"></i>
							</div>	

							<Link to="/cart" className="buy-btn" onClick={() => buyItem(id, image, name, price, quantity)}>
								Buy Now
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Card;