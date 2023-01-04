const { LinkModel } = require("./database/models/links")
const { isValidHttpUrl } = require("./utils/url")
const crypto = require('node:crypto');

const find = (req, res) => {
    let url = req.params.url;

    LinkModel.findOne({ short: url }, (err, result) => {
        if (!err && result) {
            return res.redirect(result.original); 
        }

        return res.status(404).json({
            error: 'url not found'
        });
    })
}

const create = async (req, res) => {
    const url = req.body['url'];

    if (!isValidHttpUrl(url)) {
        return res.status(429).json({error: 'invalid url'});
    }

    const short = crypto.randomUUID().toString().slice(0,5);

    await LinkModel.create({
        original: url,
        short: short,
    });

    return res.status(201).json({
        original_url: url,
        short_url: short
    });

}

module.exports = { find, create }