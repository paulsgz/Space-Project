const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    body: String,
    rating: Number
})

module.exports = mongoose.model('Comment', CommentSchema);