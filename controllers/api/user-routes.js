const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

router.get('/', (req, res) => {
    User.findAll()
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    User.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Post,
                attributes: ['title', 'contents']
            },
            {
                model: Comment,
                attributes: ['text']
            }
        ]
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password
    })
        .then(dbUserData => {
            req.session.save(() => {
                req.session.user_id = dbUserData.id;
                req.session.username = dbUserData.username;
                req.session.loggedIn = true;

                res.json(dbUserData);
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/login', (req, res) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'User not found' });
            } else if (dbUserData.password === req.body.password) {
                req.session.save(() => {
                    req.session.user_id = dbUserData.id;
                    req.session.username = dbUserData.username;
                    req.session.loggedIn = true;
                    
                    res.json({ user: dbUserData, message: 'Logged in!' });
                });
            } else {
                res.status(400).json({ message: 'Invalid password' });
            }
        })
        .catch(err => {
            console.log(err)
        });
});

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;