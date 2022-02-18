const mongoose = require('mongoose');
const {isEmail} = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Please, enter your name"]
	},
	email: {
		type: String,
		required: [true, "Please, enter your email"],
		unique: true,
		lowercase: true,
		validate: [isEmail, "Please, enter a valid email"]
	},
	password: {
		type: String,
		required: [true, "Please, enter the password"],
		minlength: [6, "Minimum password length is 6"]
	},
	cpassword: {
		type: String,
		required: [true, "Please, enter the password again"]
	}
});

//mongoose hook to hash password before saving document to db
userSchema.pre('save', async function(next){
	const salt = await bcrypt.genSalt();
	this.password = await bcrypt.hash(this.password, salt);
	this.cpassword = await bcrypt.hash(this.cpassword, salt);
	next();
});

//using satics function for user login
userSchema.statics.login = async function(email, password){
	const user = await this.findOne({email});

	if(user){
		const auth = await bcrypt.compare(password, user.password);

		if(auth){
			return user;
		}
		throw Error('Invalid password or email')
	}
	throw Error('Invalid password or email')
}

const User = mongoose.model('user', userSchema);

module.exports = User;