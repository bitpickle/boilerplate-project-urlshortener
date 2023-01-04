const { default: mongoose } = require("mongoose");

const schema = new mongoose.Schema({
    original: {type: String, required: true},
    short: String
});

let model = mongoose.model('Link', schema);

module.exports = {
    LinkModel: model
};