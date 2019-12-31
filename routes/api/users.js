const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

// @MODEL
const User = require('../../models/User');

// @route GET api/users
// @desc Get all users
// @access Public
router.get('/', (req, res) => {
    User.find()
        .then(user => res.json(user))
        .catch(err => res.status(400).json(err));
});

// @route POST api/users
// @desc ADD a user
// @access Public
router.post('/', (req, res) => {
    const { name, email, password } = req.body;
  
    // Simple validation
    if(!name || !email || !password) {
      return res.status(400).json({ msg: 'Please enter all fields' });
    }
  
    // Check for existing user
    User.findOne({ email })
      .then(user => {
        if(user) return res.status(400).json({ msg: 'User already exists' });
  
        const newUser = new User({
          name,
          email,
          password
        });
  
        // Create salt & hash
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            newUser.password = hash;
            newUser.save()
              .then(user => {
                res.json({
                    user: {
                    id: user.id,
                    name: user.name,
                    email: user.email
                    }
                });
              });
          })
        })
      })
  });

// @route DETELE api/users
// @desc Delete a user
// @access Public
router.delete('/:id', (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.status(200).json('User deleted.'))
        .catch(err => res.status(400).json(err));
});

// @route GET api/users
// @desc Find a user
// @access Public
router.get('/:id', (req, res) => {
    User.findById(req.params.id)
        .then(user => res.status(200).json(user))
        .catch(err => res.status(400).json(err));
});

// @route UPDATE api/users
// @desc Update a user
// @access Public
router.post('/:id/update', (req, res) => {
    User.findById(req.params.id)
        .then(user => {
            user.name = req.body.name;
            user.email = req.body.email;
            res.json(user);
        })
        .catch(err => res.status(404).json(err));
});

module.exports = router;