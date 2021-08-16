const router = require('express').Router();
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
        alternate: 'Sign up',
        url: '/signup'
    }
    res.render('form', {
        identifier
    });
});

router.get('/signup', (req, res) => {
    const identifier = {
        which: 'Signup',
        alternate: 'Login',
        url: '/login'
    }
    res.render('form', {
        identifier
    });
});

module.exports = router;