import React, {useContext} from 'react';
import {Link} from 'react-router-dom'

//importing css file
import './Cart.css'

//import context
import {CartContext} from '../../Context/MainContext.js'

const Cart = () => {
	const {cartItem, deleteFromCart, increaseQuantity, decreaseQuantity, totalQuantity, totalAmount} = useContext(CartContext);

	return(
		<section className="cart-container">
			<div className="cart-wrapper">
				<div className="cart-header">
					{
						cartItem.length ? <h2>Shopping Cart</h2> : <h2>Empty Shopping Cart</h2>
					}
					<p>Total {totalQuantity} quantity in the cart</p>
				</div>

				<div className="cart-content">
				{
					cartItem.length ? (
						<ul>
							{
								cartItem.map(item => {
									return(
										<li key={item.id}>
											<div className="item-detail">
												<div className="item-image">
													<img src={item.image} alt={item.image} />
												</div>

												<div className="item-info">
													<p>{item.name}</p>
													<span>$ {item.price}</span>
												</div>
											</div>

											<div className="item-quantity">
												<i className="fas fa-plus" onClick={() => increaseQuantity(item.id)}></i>			
												<input type="text" placeholder={item.quantity} disabled />
												<i className="fas fa-minus" onClick={() => decreaseQuantity(item.id)}></i>
											</div>

											<div className="item-price">
												<p>Total Price</p>
												<span>$ {item.price * item.quantity}</span>
											</div>

											<div className="item-remove" onClick={() => deleteFromCart(item.id)}>
												<i className="fas fa-trash"></i>
											</div>
										</li>	
									)
								})
							}									
						</ul>
					) : ('')
				}					
				</div>

				<div className="cart-footer">
					<div className="total">
						<p>Total</p>
						<span>$ {totalAmount}</span>
					</div>	
					<Link to="checkout" className="checkout-btn">
						<p>Proceed to Checkout</p>
						<i className="fas fa-chevron-right"></i>
					</Link>
					<Link to='' className="shop-again">
						<p>Back To Shopping</p>
						<i className="fas fa-chevron-right"></i>								
					</Link>											
				</div>
			</div>
		</section>

	);
}

export default Cart