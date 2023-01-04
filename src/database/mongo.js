const { default: mongoose } = require("mongoose");
const connectMongo = () => {
    let url = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@fcc.m5uacdr.mongodb.net/?retryWrites=true&w=majority`;
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
}

module.exports = { connectMongo }