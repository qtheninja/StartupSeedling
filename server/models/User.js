const mongoose = require('mongoose');

const usernameValidation = {
	type: String, 
	lowercase: true, 
	required: [true, "can't be blank"], 
	match: [/^[a-zA-Z0-9]+$/, 'is invalid'], 
	index: true}

const emailValidation = {
	type: String, 
	lowercase: true, 
	required: [true, "can't be blank"], 
	match: [/\S+@\S+\.\S+/, 'is invalid'], 
	index: true
}


const UserSchema = new mongoose.Schema({
  username: usernameValidation,
  email: emailValidation,
  bio: String,
  image: String,
  hash: String,
  salt: String
}, {timestamps: true});

mongoose.model('User', UserSchema);