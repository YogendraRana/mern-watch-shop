const User = require('../models/User')
const jwt = require('jsonwebtoken')

//error handler
function handleError(err){
	console.log(err.message, err.code);

	const errors = {name: '', email: '', password: '', cpassword: ''};

	//login error handling
	if(err.message === 'Invalid password or email'){
		errors.email = 'Invalid password or email';
		errors.password = 'Invalid password or email';
	}

	//duplicate error code or duplicate email error handling
	if(err.code === 11000){
		errors.email = 'That email is already registered';
	}

	//validation errors
	if(err.message.includes('user validation failed')){
		Object.values(err.errors).forEach((error) => {
			errors[error.properties.path] = error.properties.message;
		})
	}

	return errors;
}


//token generation
function createToken(id){
	return jwt.sign({id}, process.env.JWT_SECRET_KEY, {expiresIn: 24*60*60});
}



//register post authController
const register_post = async (req, res) => {
	const {name, email, password, cpassword} = req.body

	try{
		if (password === cpassword){
			const user = await User.create({name, email, password, cpassword});
			const token = createToken(user._id);
			res.cookie('jwt', token, {expires: new Date(Date.now() + 900000), httpOnly: true, secure: true});
			res.status(201).json({user:user._id});
		}
		else if(password !== cpassword){
			res.status(400).json({errors: {cpassword: 'The password do not match'}});
		}
	}

	catch(err){
		const errors = handleError(err);
		res.status(400).json({errors});
	}

}


//login post authControllers
const login_post = async (req, res) => {
	const {email, password} = req.body

	try{
		const user = await User.login(email, password);
		const token = createToken(user._id);
		res.cookie('jwt', token, {expires: new Date(Date.now() + 900000), httpOnly: true, secure: true});
		res.status(200).json({user: user._id})
	}

	catch(err){
		const errors = handleError(err);
		res.status(400).json({errors})
	}
}


//logout get authController
const logout_get = (req, res) => {
	res.cookie('jwt', '', {expires: new Date(Date.now()), httpOnly: true, secure: true});
	res.redirect('/'); 
}


module.exports = {register_post, login_post, logout_get};