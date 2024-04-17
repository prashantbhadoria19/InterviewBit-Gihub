const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  repositories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Repository' }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
