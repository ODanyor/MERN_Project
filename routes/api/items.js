const express = require('express');
const router = express.Router();

// Items model
const Item = require('../../models/Item');

// Routers
// GET items
router.get('/', (req, res) => {
    Item.find()
        .then(items => res.json(items))
        .catch(err => res.status(400).json(err));
});

// GEt an item
router.get('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => res.json(item))
        .catch(err => res.status(400).json(err));
})

// POST an item
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });
    newItem.save()
        .then(item => res.json(item))
        .catch(err => res.status(400).json(err));
});

// DELETE an item
router.delete('/:id', (req, res) => {
    Item.findByIdAndDelete(req.params.id)
        .then(() => res.json('Item was deleted.'))
        .catch(err => res.status(400).json(err));
});

module.exports = router;