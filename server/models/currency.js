const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const currencylist = new Schema({
    text: {
        type: String,
        required: true
    },
    key: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    }
    ,
    flag: {
        type: String,
        required: true
    }
    ,
    symbol: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model("currencylist", currencylist, "currencylist")