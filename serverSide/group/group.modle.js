const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    managers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }],
    members: [{
        user: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'user',
            required: true
        },
        active: {
            type: Boolean,
            default: true
        }
    }],
    tasks: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Task'
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    active: {
        type: Boolean,
        default: true
    }
});


const groupModel = mongoose.model('Group', groupSchema);

module.exports = { groupModel };
