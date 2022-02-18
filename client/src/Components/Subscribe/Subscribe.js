import React, {useState} from 'react'

//import style
import './Subscribe.css'

const Subscribe = () => {
	const [email, setEmail] = useState('');

	return(
		<div className="subscribe-wrapper">
			<h3>Get Discount Info</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

			<form action="#" className="subscribe-form">
				<input 
				type="email" 
				placeholder="Enter your email address here..." 
				value={email}
				onChange={(e) => setEmail(e.target.value)} 
				required />
				<button type="submit" className="subscribe-btn">Subscribe</button>
			</form>
		</div>
	)
}

export default Subscribe