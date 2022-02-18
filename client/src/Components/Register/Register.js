import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'

//importing css
import './Register.css'

const Register = () => {
	const nameError = document.querySelector('.name-error');
	const emailError = document.querySelector('.email-error');
	const passwordError = document.querySelector('.password-error');
	const cpasswordError = document.querySelector('.cpassword-error');

	const history = useHistory();

	const [user, setUser] = useState({name: "", email: "", password: "", cpassword: ""});

	const handleChange = (e) => {
		let name=e.target.name;
		let value=e.target.value

		setUser({...user, [name]: value});
	}

	const handleRegisterSubmit = async (e) => {
		e.preventDefault();

		//reset errors
		nameError.textContent = '';
		emailError.textContent = '';
		passwordError.textContent = '';
		cpasswordError.textContent = '';

		//get the form values
		const {name, email, password, cpassword} = user;

		try{
			const res = await fetch('/register', {
				method: 'POST', 
				body: JSON.stringify({name, email, password, cpassword}),
				headers: {
					'Content-Type': 'application/json'
				}
			})

			const userData = await res.json();

			console.log(userData);

			if(userData.errors){
				nameError.textContent = userData.errors.name;
				emailError.textContent = userData.errors.email;
				passwordError.textContent = userData.errors.password;
				cpasswordError.textContent = userData.errors.cpassword;
			}

			if(userData.user){
				history.push('/');
			}
		}

		catch(err){
			console.log(err);
		}		
	}



	return(	
		<div className="register-wrapper">
			<form method="POST" className="register-form">
	      		<div>
	        		<h2>Register</h2>
	        	</div>

	        	<div>
	          		<input type="text" name="name" value={user.name} onChange={handleChange} placeholder="Name" required />
	          		<div className="name-error"></div>
	        	</div>

	        	<div>
	          		<input type="email" name="email" value={user.email}  onChange={handleChange} placeholder="Email" required />
	          		<div className="email-error"></div>
	        	</div>

	        	<div>
	          		<input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Password" required />
	          		<div className="password-error"></div>
	        	</div>

	        	<div>
		          	<input type="password" name="cpassword" value={user.cpassword} onChange={handleChange} placeholder="Confirm Password" required />
		          	<div className="cpassword-error"></div>
	        	</div>

	        	<div>
	        		<button type="submit" onClick={handleRegisterSubmit}>Register</button>
	        	</div>

	        	 <div className="social-media">	
			    	<p>Sign Up with</p>
			    	<div>
			        	<Link to="#"><i className="fab fa-facebook-f"></i></Link>
			      		<Link to="#"><i className="fab fa-twitter"></i></Link>
			        	<Link to="#"><i className="fab fa-google"></i></Link>
			    	</div>
			    </div>

	        	<div className="log-in-link">
			    	<p>Already have an account? If yes, just log in. We've missed you!</p>
			   		<Link to="/login">Click here to log in.</Link>	    
			   	</div>
      		</form> 

		    <div className="register-sub-wrapper">
		      	<p>{user.name}</p>
		      	<p>{user.email}</p>
		      	<p>{user.password}</p>
		      	<p>{user.cpassword}</p>
		    </div>
		</div>
	)
}

export default Register