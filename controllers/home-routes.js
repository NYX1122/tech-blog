const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Comment, Post } = require('../models');

router.get('/', (req, res) => {
    Post.findAll({
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Comment,
                attributes: ['text']
            }
        ]
    })
      .then(dbPostData => {
          const posts = dbPostData.map(post => post.get({ plain: true }));
          res.render('homepage', {
              posts,
              loggedIn: req.session.loggedIn
          });
      })
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});

router.get('/login', (req, res) => {
    const identifier = {
        which: 'Login',
        button: 'Login!',
        alternate: 'Sign up instead',
        url: '/signup'
    }
    res.render('login', {
        identifier
    });
});

module.exports = router;