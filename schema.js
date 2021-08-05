const mongoose = require('mongoose');
const PostSchema = new mongoose.Schema(
    {
        name: String,
        class: String
    }
);

const postModel = mongoose.model('user', PostSchema)

module.exports = postModel;
