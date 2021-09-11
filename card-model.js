const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
    userID: { type: String },
    guildID: { type: String },
    imgUrl: { type: String }
});

module.exports = mongoose.model('Cards', CardSchema);
