const jwt = require('jsonwebtoken');
const User = require('../models/User')

//jwt authentication to check if user is logged in
const jwtAuthentication = (req, res, next) => {
	const token = req.cookies.jwt;

	if(token){
		jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decodedToken) => {
			if(err){
				console.log(err.message);
				res.redirect('/login');
			}
			else{
				console.log(decodedToken);
				next();
			}
		})
	}
	else{
		res.redirect('/login');
	}
}


//check and get user data
const checkUser = (req, res, next) => {
	const token = req.cookies.jwt;

	if(token){
		jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, decodedToken) => {
			if(err){
				console.log(err.message);
				loggedUser = null;
				next();
			}
			else{
				const loggedUser = await User.findById(decodedToken.id);
				loggedUser = loggedUser;
				next();
			}
		})
	}
	else{
		loggedUser = null;
		res.status(401).send('No token Available');
		next();
	}
}

module.exports = {jwtAuthentication, checkUser};
