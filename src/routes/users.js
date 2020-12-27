/*
    4th config to start app
*/
const { Router } = require('express');
const router = Router();
const User = require('../models/User');
const faker = require('faker');
const { fake } = require('faker');

router.get('/', async(req, res) => {
    return res.status(200).json({
        users: {
            name: 'jensy santana'
        }
    });
});

router.get('/api/v1/users', async(req, res) => {
    const users = await User.find();
    return res.status(200).json({ users });
});

router.get('/api/v1/users/create', async(req, res) => {

    for (let i = 0; i < 5; i++) {
        const element = await User.create({
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            avatar: faker.image.avatar(),
        });

    }
    return res.json({ message: '5 User created' });
});





module.exports = router;