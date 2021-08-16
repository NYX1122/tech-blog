const router = require('express').Router();
const { User, Comment, Post } = require('../models');

router.get('/', (req, res) => {
    Post.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: ['title', 'created_at'],
        order: [['created_at', 'DESC']]
    })
      .then(dbPostData => {
          const posts = dbPostData.map(post => post.get({ plain: true }));
          
          res.render('dashboard/dashboard-home', { layout: 'dashboard', posts });
      });
});

module.exports = router;