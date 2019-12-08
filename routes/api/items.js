const express = require('express');
const router = express.Router();

// Items model
const Item = require('../../models/Item');

// Routers
router.get('/', (req, res) => {
    Item.find()
        .then(items => res.json(items))
        .catch(err => res.status(400).json(err));
});
router.get('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => res.json(item))
        .catch(err => res.status(400).json(err));
})
router.post('/add', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });
    newItem.save()
        .then(item => res.json(item))
        .catch(err => res.status(400).json(err));
});
router.delete('/:id/delete', (req, res) => {
    Item.findByIdAndDelete(req.params.id)
        .then(() => res.json('Item was deleted.'))
        .catch(err => res.status(400).json(err));
});

module.exports = router;