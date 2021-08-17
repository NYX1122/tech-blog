const router = require('express').Router();
const { User, Comment, Post } = require('../models');

router.get('/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Comment,
                attributes: ['user_id', 'text', 'created_at'],
                include: {
                    model: User,
                    attribtues: ['username']
                }
            }
        ]
    })
      .then(dbPostData => {
          const post = dbPostData.get({ plain: true });
          console.log(post);
          res.render('post/single-post', {post});
      })
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});

module.exports = router;