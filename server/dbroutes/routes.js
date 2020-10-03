// const { fetchItems, addItem } = require('../controllers/controller');

// const routes = [
//     {
//         method: 'GET',
//         url: '/currency',
//         handler: fetchItems
//     },
//     {
//         method: 'POST',
//         url: '/api/menuItems',
//         handler: addItem,
//     },

// ]

// module.exports = routes

const express = require('express')

const crryctrl = require('../controllers/controller')

const router = express.Router()

router.get('/currency', crryctrl.fetchItems)

router.post('/add', crryctrl.addItem)





module.exports = router