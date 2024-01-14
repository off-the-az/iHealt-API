const mongoose = require('mongoose');

const PillowSchema = mongoose.Schema;

const Pillow = new PillowSchema(
    {
        name: {
            type: String,
            required: true
        },
        format: {
            type: String,
            required: true
        },
        instruction: {
            type: String,
            required: true
        }
    }
);

module.exports = mongoose.model('Pillow', Pillow);