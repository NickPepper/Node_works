'use strict';

let mongoose = require('mongoose'),
    Schema   = mongoose.Schema,
    TaskSchema = new Schema({
        name: {
            type: String,
            Required: 'You must enter the name of the task'
        },
        Created_date: {
            type: Date,
            default: Date.now
        },
        status: {
            type: [{
                type: String,
                enum: ['pending', 'ongoing', 'completed']
            }],
            default: ['pending']
        }
    });

module.exports = mongoose.model('Tasks', TaskSchema);
