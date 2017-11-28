const mongoose = require('mongoose'),
Schema = mongoose.Schema;


const userSchema = new Schema({
name: {type: String, unique: true},
password:{type: String},
// city: {type: String, },
// artists: {type: Array, }
});

// next, create a model
const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
