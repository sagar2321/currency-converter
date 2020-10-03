const express = require('express');
const router = express.Router()

const Currency = require('../models/currency');

router.get('/', (req, res) => {
    console.log("HERE")
    Currency.find()
        .then(users => res.json(users))
        .catch(err => console.log(err))
})

router.post('/', (req, res) => {
    const { name, email } = req.body;
    const newUser = new Currency({
        text: text, key: key, value: value, flag: flag, symbol: symbol,
    })
    newUser.save()
        .then(() => res.json({
            message: "Created account successfully"
        }))
        .catch(err => res.status(400).json({
            "error": err,
            "message": "Error creating account"
        }))
})
module.exports = router 