const { Comment } = require('../models');

const commentData = [
    {
        text: 'Congratulations!!',
        post_id: 1,
        user_id: 4
    },
    {
        text: 'Good luck!!',
        post_id: 1,
        user_id: 2
    },
    {
        text: 'Test comment for post 2 from jane',
        post_id: 2,
        user_id: 3
    },
    {
        text: 'Test comment for post 3 from bodee',
        post_id: 3,
        user_id: 1
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;