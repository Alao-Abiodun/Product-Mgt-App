const {Schema, model} = require('mongoose');

const commentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    comments: {
        type: String,
    },
    reply: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Reply'
        }
    ]
}, {
    timestamps: true
})

const Comment = model('Comment', commentSchema);

module.exports = Comment;