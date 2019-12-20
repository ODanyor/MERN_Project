const express = require('express')
const router = express.Router()

// Items model
const Item = require('../../models/Item')

// @route GET api/items
// @desc Get all items
// @access Public
router.get('/', (req, res) => {
    Item.find()
        .then(items => res.json(items))
        .catch(err => res.status(400).json(err))
});

// @route POST api/items
// @desc Post an item
// @access Public
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });
    newItem.save()
        .then(item => res.json(item))
        .catch(err => res.status(400).json(err))
});

// @route DELETE api/items/:id
// @desc Delete an item
// @access Public
router.delete('/:id', (req, res) => {
    Item.findByIdAndDelete(req.params.id)
        .then(() => res.json('Item was deleted.'))
        .catch(err => res.status(400).json(err))
});

// @route GET api/items/:id
// desc Get an item
// access Public
router.get('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => res.json(item))
        .catch(err => res.status(400).json(err))
});

// @route UPDATE api/items/:id/edit
// @desc Update an item
// @access Public
router.post('/:id/edit', (req, res) => {
    Item.findById(req.params.id)
        .then(item => {
            item.name = req.body.name
            item.save()
                .then(() => res.json(item))
                .catch((err) => res.status(400).json(err))
        })
        .catch(err => res.status(400).json(err));
});

module.exports = router;