const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PostSchema = new Schema({
    name: String,
    userPic: String,
    title: String,
    description: String,
    image: String,
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comments'
    }]
})

module.exports = mongoose.model('Post', PostSchema);