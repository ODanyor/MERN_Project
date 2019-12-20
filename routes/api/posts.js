const express = require('express');
const router = express.Router();

// Model
const Post = require('../../models/Post');

// @route GET api/posts
// @desc Get all posts
// @access Public
router.get('/', (req, res) => {
    Post.find()
        .then(post => res.json(post))
        .catch(err => res.status(400).json(err));
});

// @route ADD api/posts
// @desc Add a post
// access Public
router.post('/', (req, res) => {
    const newPost = new Post({
        title: req.body.title,
        description: req.body.description
    });
    newPost.save()
        .then(post => res.json(post))
        .catch(err => res.status(400).json(err));
});

// @route DELETE api/posts/:id
// @desc Delete a post
// @access Public
router.delete('/:id', (req, res) => {
    Post.findByIdAndDelete(req.params.id)
        .then(() => res.json('Post was deleted'))
        .catch(err => res.status(404).json(err));
});

// @route GET api/posts/:id
// @desc Get a post
// access Public
router.get('/:id', (req, res) => {
    Post.findById(req.params.id)
        .then(post => res.json(post))
        .catch(err => res.status(404).json(err));
});

// @route UPDATE api/posts/:id/edit
// @desc Update a post
// @access Public
router.post('/:id/edit', (req, res) => {
    Post.findByIdAndUpdate(req.params.id)
        .then(post => {
            post.title = req.body.title
            post.description = req.body.description
            post.save()
                .then(() => res.json(post))
                .catch(err => res.status(400).json(err));
        })
        .catch(err => res.status(404).json(err));
});

module.exports = router;