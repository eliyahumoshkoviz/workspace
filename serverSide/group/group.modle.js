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
        ref: 'user',
        required: true
    }],
    members: [{
        user: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'user',
            required: true
        },
        active: {
            type: Boolean,
            default: true,
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

groupSchema.pre('save', async function (next) {
    if (this.managers.length === 0 || this.members.length === 0) {
        return next(new Error('At least one manager and one member are required'));
    }
    next();
});


const groupModel = mongoose.model('Group', groupSchema);

module.exports = { groupModel };
