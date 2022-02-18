import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom'

//import context
import {CartContext} from '../../Context/MainContext.js'

///importing css
import './Checkout.css'

const Checkout = () => {	
	const {cartItem, totalQuantity, totalAmount, deliveryCharge} = useContext(CartContext);

	const [currentStep, setCurrentStep] = useState(0);
	const [activePayment, setActivePayment] = useState("credit");
	const [extraCharge, setExtraCharge] = useState(0);
	const [grandTotal, setGrandTotal] = useState(totalAmount);
	const [deliveryClicked, setDeliveryClicked] = useState(false);

	//form variables for credit/debit card
	const [cardName, setCardName] = useState("");
	const [cardNo1, setCardNo1] = useState("");
	const [cardNo2, setCardNo2] = useState("");
	const [cardNo3, setCardNo3] = useState("");
	const [cardNo4, setCardNo4] = useState("");
	const [cardExp, setCardExp] = useState("");
	const [cardSecurity, setCardSecurity] = useState("");
	const finalCardNumber = cardNo1+cardNo2+cardNo3+cardNo4;

	//form variables for shipping
	const [shippingName, setShippingName] = useState("");
	const [shippingCity, setShippingCity] = useState("");
	const [shippingAddress, setShippingAddress] = useState("");
	const [shippingProvince, setShippingProvince] = useState("Province 1");
	const [shippingPhone, setShippingPhone] = useState("");
	const [shippingEmail, setShippingEmail] = useState("");

	const handleDeliveryRadio = () => {
		setExtraCharge(deliveryCharge);
		setGrandTotal(grandTotal + deliveryCharge);
		setDeliveryClicked(true);
	}

	const prevStep = () => {
		currentStep === 0 ? setCurrentStep(0) : setCurrentStep(prevState => prevState - 1);		
	}

	const nextStep = () => {
		currentStep === 2 ? setCurrentStep(2) : setCurrentStep(nextState => nextState + 1);		
	}

	return(
		<section className="checkout-wrapper">
			<div className="checkout">
				<div className="checkout-head">
					<h2>Checkout System</h2>
					<ul className="progressbar">
				    	<li className={currentStep >= 0 ? "active-step" : ""}>Payment</li>
				    	<li className={currentStep >= 1 ? "active-step" : ""}>Shipping</li>
				    	<li className={currentStep === 2 ? "active-step" : ""}>Submit</li>
				  	</ul>	
				</div>	

				<form id="checkout-form" className="checkout-form" action="#">
					{currentStep === 0 && (
					<div className="payment-info">
						<ul className="payment-options">
							<li className={activePayment === "credit" ? "payment-opt active": "payment-opt"} onClick = {() => setActivePayment('credit')}>
								<i className="fa fa-credit-card" aria-hidden="true"></i>
								<span>Credit Card</span>
							</li>
							<li className={activePayment === "paypal" ? "payment-opt active": "payment-opt"} onClick = {() => setActivePayment('paypal')}>
								<i className="fa fa-paypal" aria-hidden="true"></i>
								<span>PayPal</span>
							</li>
							<li className={activePayment === "transfer" ? "payment-opt active": "payment-opt"} onClick = {() => setActivePayment('transfer')}>
								<i className="fa fa-university" aria-hidden="true"></i>
								<span>Bank Transfer</span>
							</li>
						</ul>

						{activePayment === "credit" && (
						<div className="credit-form">
							<div className="row-1">
								<div>
									<label for="name">Name on the Card</label>
									<input id="name" maxlength="20" type="text" value={cardName} onChange={e => setCardName(e.target.value)} required />
								</div>
							</div>

							<div className="row-2">
								<div>
									<label>Card Number</label>
									<div className="card-num">
										<input type="text" maxlength="4" inputmode="numeric" placeholder="* * * *" value={cardNo1} onChange={e => setCardNo1(e.target.value)} required />
										<input type="text" maxlength="4" inputmode="numeric" placeholder="* * * *" value={cardNo2} onChange={e => setCardNo2(e.target.value)} required />
										<input type="text" maxlength="4" inputmode="numeric" placeholder="* * * *" value={cardNo3} onChange={e => setCardNo3(e.target.value)} required />
										<input type="text" maxlength="4" inputmode="numeric" placeholder="* * * *" value={cardNo4} onChange={e => setCardNo4(e.target.value)} required />
									</div>
								</div>
							</div>

							<div className="row-3">
								<div>
									<label for="expiry-date">Expiration</label>
									<input id="expiry-date" type="text" placeholder="MM/YYYY" value={cardExp} onChange={e => setCardExp(e.target.value)} required />
								</div>

								<div>
									<label for="security-code">Security Code</label>
									<input id="security-code" type="text" pattern="[0-9]*" maxlength="3" inputmode="numeric" placeholder="* * *" value={cardSecurity} onChange={e => setCardSecurity(e.target.value)} required />
								</div>
							</div>
						</div>
						)}

						{activePayment === "paypal" && (
						<div className="paypal">
							<p>Paypal is the easiest way to pay online</p>
							<Link to="#">Log in to PayPal</Link>
						</div>
						)}

						{activePayment === "transfer" && (
						<div className="transfer">
							<div className="bank-name">
								<span>Bank</span>
								<p>Standard Chartered Bank Ltd.</p>
							</div>

							<div className="acc-number">
								<span>Account Number</span>
								<p>12345678912345</p>
							</div>

							<div className="iban">
								<span>IBAN</span>
								<p>123456789</p>
							</div>

							<div className="note">
								<span>Note</span>
								<p>Something that seller wants the customer to know about...</p>
							</div>
						</div>
						)}
					</div>
					)}
					
					{currentStep === 1 && (
					<div className="shipping">
						<div className="row-1">
							<div>
								<label for="full_name">Full Name</label>
								<input type="text" id="full_name" placeholder="ex. John M. Doe" value={shippingName} onChange={e => setShippingName(e.target.value)} required />
							</div>

							<div>
								<label for="city">City</label>
								<input type="text" id="city" placeholder="ex. Dharan" value={shippingCity} onChange={e => setShippingCity(e.target.value)} required />
							</div>
						</div>

						<div className="row-2">
							<div>
								<label>Select Province</label>
								<select value={shippingProvince} onChange={e => setShippingProvince(e.target.value)}>
									<option>Province 1</option>
									<option>Province 2</option>
									<option>Province 3</option>
									<option>Province 4</option>
									<option>Province 5</option>
									<option>Province 6</option>
									<option>Province 7</option>
								</select>
							</div>
						</div>
						
						<div className="row-3">
							<div>
								<label for="address">Address</label>
								<input type="text" id="address" placeholder="ex. 542 W. 15th Street" value={shippingAddress} onChange={e => setShippingAddress(e.target.value)} required />
							</div>

							<div>
								<label for="mobile">Mobile</label>
								<input type="numeric" id="mobile" placeholder="Required" value={shippingPhone} onChange={e => setShippingPhone(e.target.value)} required />
							</div>

							<div>
								<label for="email">Email Address</label>
								<input type="text" id="email" placeholder="Optional" value={shippingEmail} onChange={e => setShippingEmail(e.target.value)} />
							</div>
						</div>	

						<div className="row-4">
							<div className="shipping-mode">
								<p>Choose Shipping Mode</p>
								<div>
									<input type="radio" id="pickup" name="shipping" onClick={() => {
											setExtraCharge(0)
											setGrandTotal(totalAmount)
											setDeliveryClicked(false)
										}} 
									/>
									<label for="pickup">Store Pickup - Free </label>
								</div>

								<div>
									<input type="radio" id="home-delivery" name="shipping" onClick={!deliveryClicked ? handleDeliveryRadio : ""}/>
									<label for="home_delivery">Home Delivery - $ 10 </label>
								</div>
							</div>
						</div>
					</div>
					)}

					{currentStep === 2 && (
					<div className="confirmation">
						<div className="row-1">
							<div className="confirm-name">
								<span>Card Name</span>
								<p>{cardName}</p>
							</div>

							<div className="confirm-card-no">
								<span>Card Number</span>
								<p>{finalCardNumber}</p>
							</div>
						</div>

						<div className="row-2">
							<div className="confirm-amount">
								<span>Amount</span>
								<p>{grandTotal}</p>
							</div>
						</div>

						<div className="row-3">
							<div className="confirm-province">
								<span>Province</span>
								<p>{shippingProvince}</p>
							</div>

							<div className="confirm-city">
								<span>City</span>
								<p>{shippingCity}</p>
							</div>

							<div className="confirm-email">
								<span>Email</span>
								<p>{shippingEmail}</p>
							</div>
						</div>

						<div className="row-4">
							<div className="confirm-address">
								<span>Address</span>
								<p>{shippingAddress}</p>
							</div>

							<div className="confirm-phone">
								<span>Phone</span>
								<p>{shippingPhone}</p>
							</div>
						</div>
					</div>
					)}
				</form>

				<div className="checkout-footer">
					<button className="button-prev" onClick={prevStep} disabled={currentStep === 0}>Previous</button>
					<button className="button-next" onClick={nextStep}>{currentStep === 2 ? "Confirm" : "Next"}</button>
				</div>
			</div>
			
			<div className="order-summary-wrapper">
				<div className="order-summary">
					<div className="summary-head">
						<h3>Order Summary</h3>
						<p>Total {totalQuantity} item</p>
					</div>

					<div className="summary-list">
						<ul>
						{
							cartItem.map((item, index) => {
								return(
	   								<li className="summary-item" key={index}>
										<div>
											<span>{item.name}</span>
											<p>$ {item.price}</p>
										</div>
										<i className="fa fa-info" aria-hidden="true"></i>
									</li>
								)
							})
						}	
						</ul>					
					</div>

					<div className="summary-total">
						<div>
							<span>Order Total:</span>
							<p>$ {totalAmount}</p>
						</div>
						<div>
							<span>Home Delivery:</span>
							<p>$ {extraCharge}</p>
						</div>
						<div className="grand-total">
							<span>Grand Total:</span>
							<p>$ {grandTotal}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)

};

export default Checkout