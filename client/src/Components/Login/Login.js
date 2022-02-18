import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'

//importing css
import './Login.css'

const Login = () => {
	const emailError = document.querySelector('.email-error');
	const passwordError = document.querySelector('.password-error');

	const history = useHistory();

	const [user, setUser] = useState({email: "", password: ""});

	const handleChange = (e) => {
		let name=e.target.name;
		let value=e.target.value

		setUser({...user, [name]: value});
	}

	const handleLoginSubmit = async (e) => {
		e.preventDefault();

		//reset errors
		emailError.textContent = '';
		passwordError.textContent = '';

		//get the form values
		const {email, password} = user;

		try{
			const res = await fetch('/login', {
				method: 'POST', 
				body: JSON.stringify({email, password}),
				headers: {
					'Content-Type': 'application/json'
				}
			})

			const userData = await res.json();

			if(userData.errors){
				emailError.textContent = userData.errors.email;
				passwordError.textContent = userData.errors.password;
			}

			if(userData.user){
				history.push('/')
			}
		}

		catch(err){
			console.log(err);
		}		
	}


	return(	
		<div className="login-wrapper">	
  			<form className="login-form">
		    	<div>
		    		<h2>Log In</h2>
		      	</div>

		      	<div>
		        	<input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Email Address" />
		      		<div className="email-error"></div>
		      	</div>

		      	<div>
		        	<input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Password" />
		      		<div className="password-error"></div>
		      	</div>

		      	<div className="remember-me">
		        	<input type="checkbox" />
		        	<span>Remember me?</span>
				</div>	

				<div>
					<button type="submit" onClick={handleLoginSubmit}>Log In</button>
				</div>

				<div>
					<Link to="#" className="forgot-password">Forgot Password?</Link>
	            </div>

			    <div className="social-media">	
			    	<p>Login with</p>
			    	<div>
			        	<Link to="#"><i className="fab fa-facebook-f"></i></Link>
			      		<Link to="#"><i className="fab fa-twitter"></i></Link>
			        	<Link to="#"><i className="fab fa-google"></i></Link>
			    	</div>
			    </div>

			    <div className="register-link">
			    	<p>New here? Register and discover great amount of new opportunities!</p>
			   		<Link to="/register">Click here to register.</Link>	    
			   	</div>
			</form>

		    <div className="login-sub-wrapper">
		      	<p>{user.email}</p>
		      	<p>{user.password}</p>
		    </div>
		</div>
	)
}

export default Login