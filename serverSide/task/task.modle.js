const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    assignedTo: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'user',
        required: true
    },

    group: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Group',
    },

    status: {
        type: String,
        enum: ['todo', 'inProgress', 'completed'],
        default: 'todo'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const taskModel = mongoose.model('Task', taskSchema);

module.exports = { taskModel };
