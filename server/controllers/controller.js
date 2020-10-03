const MenuItem = require('../models/currency');

// It reads all the items present in database
// const fetchItems = async (req, reply) => {
//     try {
//         // const menuItems = await MenuItem.find();
//         console.log("OK HERE")
//         // return menuItems
//         reply.send("SUCCESS");
//     }
//     catch (err) { console.log(err) }
// }

fetchItems = async (req, res) => {
    await MenuItem.find({}, (err, list) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!list.length) {
            return res
                .status(404)
                .json({ success: false, error: `list not found` })
        }
        return res.status(200).json({ success: true, data: list })
    }).catch(err => console.log(err))
}


// It adds an item to database
// const addItem = async (req, reply) => {
//     try {
//         const NewItem = new MenuItem({ ...req.body });
//         reply.send(NewItem.save())
//         // reply.send("SUCCESS")
//     }
//     catch (err) { console.log(err) }
// }

addItem = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a scanid',
        })
    }

    const NewItem = new MenuItem(body)

    if (!NewItem) {
        return res.status(400).json({ success: false, error: err })
    }


    NewItem
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: NewItem._id,
                message: 'NewItem created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'NewItem not created!',
            })
        });


}

module.exports = { fetchItems, addItem };