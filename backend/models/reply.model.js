const {Schema, model} = require('mongoose');

const replySchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    replies: {
        type: String,
    },
}, {
    timestamps: true
})

const Reply = model('Reply', replySchema);

module.exports = Reply;